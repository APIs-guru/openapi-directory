import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class VisionExamples:
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

    
    def add_example(self, request: operations.AddExampleRequest) -> operations.AddExampleResponse:
        r"""Create an Example
        Adds an example with the specified label to a dataset.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/vision/datasets/{datasetId}/examples", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddExampleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Example])
                res.example = out

        return res

    
    def get_examples_by_label_1(self, request: operations.GetExamplesByLabel1Request) -> operations.GetExamplesByLabel1Response:
        r"""Get All Examples for Label
        Returns all the examples for the specified label. Returns both uploaded examples and feedback examples.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/vision/examples"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExamplesByLabel1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExampleList])
                res.example_list = out

        return res

    
    def get_examples_1(self, request: operations.GetExamples1Request) -> operations.GetExamples1Response:
        r"""Get All Examples
        Returns all the examples for the specified dataset. By default, returns examples created by uploading them from a .zip file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/vision/datasets/{datasetId}/examples", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExamples1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExampleList])
                res.example_list = out

        return res

    
    def provide_feedback_1(self, request: operations.ProvideFeedback1Request) -> operations.ProvideFeedback1Response:
        r"""Create a Feedback Example
        Adds a feedback example to the dataset associated with the specified model.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/vision/feedback"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProvideFeedback1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Example])
                res.example = out

        return res

    
    def update_dataset_async_1(self, request: operations.UpdateDatasetAsync1Request) -> operations.UpdateDatasetAsync1Response:
        r"""Create Feedback Examples From a Zip File
        Adds feedback examples to the dataset associated with the specified object detection model.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/vision/bulkfeedback"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDatasetAsync1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Dataset])
                res.dataset = out

        return res

    
    def update_dataset_async_2(self, request: operations.UpdateDatasetAsync2Request) -> operations.UpdateDatasetAsync2Response:
        r"""Create Examples From a Zip File
        Adds examples from a .zip file to a dataset. You can use this call only with a dataset that was created from a .zip file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/vision/datasets/{datasetId}/upload", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDatasetAsync2Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Dataset])
                res.dataset = out

        return res

    