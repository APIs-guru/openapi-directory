import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class LanguageExamples:
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

    
    def get_examples(self, request: operations.GetExamplesRequest) -> operations.GetExamplesResponse:
        r"""Get All Examples
        Returns all the examples for the specified dataset,
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/language/datasets/{datasetId}/examples", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExamplesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExampleList])
                res.example_list = out

        return res

    
    def get_examples_by_label(self, request: operations.GetExamplesByLabelRequest) -> operations.GetExamplesByLabelResponse:
        r"""Get All Examples for Label
        Returns all the examples for the specified label. Returns both uploaded examples and feedback examples.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/language/examples"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExamplesByLabelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExampleList])
                res.example_list = out

        return res

    
    def provide_feedback(self, request: operations.ProvideFeedbackRequest) -> operations.ProvideFeedbackResponse:
        r"""Create a Feedback Example
        Adds a feedback example to the dataset associated with the specified model.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/language/feedback"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProvideFeedbackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Example])
                res.example = out

        return res

    
    def update_dataset_async(self, request: operations.UpdateDatasetAsyncRequest) -> operations.UpdateDatasetAsyncResponse:
        r"""Create Examples From a File
        Adds examples from a .csv, .tsv, or .json file to a dataset.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/language/datasets/{datasetId}/upload", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDatasetAsyncResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Dataset])
                res.dataset = out

        return res

    