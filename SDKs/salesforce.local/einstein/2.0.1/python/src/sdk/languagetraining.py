import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class LanguageTraining:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def get_train_status_and_progress(self, request: operations.GetTrainStatusAndProgressRequest) -> operations.GetTrainStatusAndProgressResponse:
        r"""Get Training Status
        Returns the status of a model's training process. Use the progress field to determine how far the training has progressed. When training completes successfully, the status is SUCCEEDED and the progress is 1.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/language/train/{modelId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTrainStatusAndProgressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrainResponse])
                res.train_response = out

        return res

    
    def retrain(self, request: operations.RetrainRequest) -> operations.RetrainResponse:
        r"""Retrain a Dataset
        Retrains a dataset and updates a model. Use this API call when you want to update a model and keep the model ID instead of creating a new model.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/language/retrain"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetrainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrainResponse])
                res.train_response = out

        return res

    
    def train(self, request: operations.TrainRequest) -> operations.TrainResponse:
        r"""Train a Dataset
        Trains a dataset and creates a model.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/language/train"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TrainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrainResponse])
                res.train_response = out

        return res

    