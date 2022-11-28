import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class VisionTraining:
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

    
    def get_train_status_and_progress_1(self, request: operations.GetTrainStatusAndProgress1Request) -> operations.GetTrainStatusAndProgress1Response:
        r"""Get Training Status
        Returns the status of a model's training process. Use the progress field to determine how far the training has progressed. When training completes successfully, the status is SUCCEEDED and the progress is 1.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/vision/train/{modelId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTrainStatusAndProgress1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrainResponse])
                res.train_response = out

        return res

    
    def retrain_1(self, request: operations.Retrain1Request) -> operations.Retrain1Response:
        r"""Retrain a Dataset
        Retrains a dataset and updates a model. Use this API call when you want to update a model and keep the model ID instead of creating a new model.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/vision/retrain"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Retrain1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrainResponse])
                res.train_response = out

        return res

    
    def train_1(self, request: operations.Train1Request) -> operations.Train1Response:
        r"""Train a Dataset
        Trains a dataset and creates a model.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/vision/train"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Train1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrainResponse])
                res.train_response = out

        return res

    