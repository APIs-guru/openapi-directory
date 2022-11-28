import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Photos:
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

    
    def delete_photo(self, request: operations.DeletePhotoRequest) -> operations.DeletePhotoResponse:
        r"""Delete a photo
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/photos/{photo_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePhotoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_photos_by_ids(self, request: operations.GetPhotosByIdsRequest) -> operations.GetPhotosByIdsResponse:
        r"""Retrieve multiple photos
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/photos/multiple"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPhotosByIdsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PhotoResult]])
                res.photo_results = out
        elif r.status_code == 400:
            pass

        return res

    
    def rotate_photo(self, request: operations.RotatePhotoRequest) -> operations.RotatePhotoResponse:
        r"""Rotate a photo
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/photos/{photo_id}/rotate", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RotatePhotoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PhotoResult])
                res.photo_result = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def upload_photo(self, request: operations.UploadPhotoRequest) -> operations.UploadPhotoResponse:
        r"""Create a photo
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/photos"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UploadPhotoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PhotoResult])
                res.photo_result = out
        elif r.status_code == 400:
            pass

        return res

    