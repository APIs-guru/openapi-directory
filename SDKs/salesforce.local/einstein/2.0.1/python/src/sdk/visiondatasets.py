import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class VisionDatasets:
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

    
    def create_dataset(self, request: operations.CreateDatasetRequest) -> operations.CreateDatasetResponse:
        r"""Create a Dataset
        Creates a dataset and labels, if they're specified.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/vision/datasets"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDatasetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Dataset])
                res.dataset = out

        return res

    
    def delete_dataset_1(self, request: operations.DeleteDataset1Request) -> operations.DeleteDataset1Response:
        r"""Delete a Dataset
        Deletes the specified dataset and associated labels and examples.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/vision/datasets/{datasetId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDataset1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeletionResponse])
                res.deletion_response = out

        return res

    
    def get_dataset_1(self, request: operations.GetDataset1Request) -> operations.GetDataset1Response:
        r"""Get a Dataset
        Returns a single dataset.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/vision/datasets/{datasetId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDataset1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Dataset])
                res.dataset = out

        return res

    
    def get_1(self, request: operations.Get1Request) -> operations.Get1Response:
        r"""Get Deletion Status
        Returns the status of an image dataset or model deletion. When you delete a dataset or model, the deletion may not occur immediately. Use this call to find out when the deletion is complete.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/vision/deletion/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.Get1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeletionResponse])
                res.deletion_response = out

        return res

    
    def list_datasets_1(self, request: operations.ListDatasets1Request) -> operations.ListDatasets1Response:
        r"""Get All Datasets
        Returns a list of datasets and their labels that were created by the current user. The response is sorted by dataset ID.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/vision/datasets"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListDatasets1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DatasetList])
                res.dataset_list = out

        return res

    
    def upload_dataset_async_1(self, request: operations.UploadDatasetAsync1Request) -> operations.UploadDatasetAsync1Response:
        r"""Create a Dataset From a Zip File Asynchronously
        Creates a dataset, labels, and examples from the specified .zip file. The call returns immediately and continues to upload the images in the background.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/vision/datasets/upload"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UploadDatasetAsync1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Dataset])
                res.dataset = out

        return res

    
    def upload_dataset_sync_1(self, request: operations.UploadDatasetSync1Request) -> operations.UploadDatasetSync1Response:
        r"""Create a Dataset From a Zip File Synchronously
        Creates a dataset, labels, and examples from the specified .zip file. The call returns after the dataset is created and all of the images are uploaded.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/vision/datasets/upload/sync"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UploadDatasetSync1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Dataset])
                res.dataset = out

        return res

    