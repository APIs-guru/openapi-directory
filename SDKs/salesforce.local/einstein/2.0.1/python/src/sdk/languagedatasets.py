import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class LanguageDatasets:
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

    
    def delete_dataset(self, request: operations.DeleteDatasetRequest) -> operations.DeleteDatasetResponse:
        r"""Delete a Dataset
        Deletes the specified dataset and associated labels and examples.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/language/datasets/{datasetId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDatasetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeletionResponse])
                res.deletion_response = out

        return res

    
    def get(self, request: operations.GetRequest) -> operations.GetResponse:
        r"""Get Deletion Status
        Returns the status of a language dataset or model deletion. When you delete a dataset or model, the deletion may not occur immediately. Use this call to find out when the deletion is complete.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/language/deletion/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeletionResponse])
                res.deletion_response = out

        return res

    
    def get_dataset(self, request: operations.GetDatasetRequest) -> operations.GetDatasetResponse:
        r"""Get a Dataset
        Returns a single dataset.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/language/datasets/{datasetId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDatasetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Dataset])
                res.dataset = out

        return res

    
    def list_datasets(self, request: operations.ListDatasetsRequest) -> operations.ListDatasetsResponse:
        r"""Get All Datasets
        Returns a list of datasets and their labels that were created by the current user. The response is sorted by dataset ID.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/language/datasets"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListDatasetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DatasetList])
                res.dataset_list = out

        return res

    
    def upload_dataset_async(self, request: operations.UploadDatasetAsyncRequest) -> operations.UploadDatasetAsyncResponse:
        r"""Create a Dataset From a File Asynchronously
        Creates a dataset, labels, and examples from the specified .csv, .tsv, or .json file. The call returns immediately and continues to upload data in the background.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/language/datasets/upload"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UploadDatasetAsyncResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Dataset])
                res.dataset = out

        return res

    
    def upload_dataset_sync(self, request: operations.UploadDatasetSyncRequest) -> operations.UploadDatasetSyncResponse:
        r"""Create a Dataset From a File Synchronously
        Creates a dataset, labels, and examples from the specified .csv, .tsv, or .json file. The call returns after the dataset is created and all of the data is uploaded.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/language/datasets/upload/sync"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UploadDatasetSyncResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Dataset])
                res.dataset = out

        return res

    