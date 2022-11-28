import requests
from typing import Optional
from sdk.models import operations
from . import utils

class StubMappings:
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

    
    def delete_admin_mappings(self) -> operations.DeleteAdminMappingsResponse:
        r"""Delete all stub mappings
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/__admin/mappings"
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAdminMappingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_admin_mappings_stub_mapping_id_(self, request: operations.DeleteAdminMappingsStubMappingIDRequest) -> operations.DeleteAdminMappingsStubMappingIDResponse:
        r"""Delete a stub mapping
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/__admin/mappings/{stubMappingId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAdminMappingsStubMappingIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_admin_mappings(self, request: operations.GetAdminMappingsRequest) -> operations.GetAdminMappingsResponse:
        r"""Get all stub mappings
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/__admin/mappings"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAdminMappingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAdminMappings200ApplicationJSON])
                res.get_admin_mappings_200_application_json_object = out

        return res

    
    def get_admin_mappings_stub_mapping_id_(self, request: operations.GetAdminMappingsStubMappingIDRequest) -> operations.GetAdminMappingsStubMappingIDResponse:
        r"""Get stub mapping by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/__admin/mappings/{stubMappingId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAdminMappingsStubMappingIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAdminMappingsStubMappingID200ApplicationJSON])
                res.get_admin_mappings_stub_mapping_id_200_application_json_object = out
        elif r.status_code == 404:
            pass

        return res

    
    def post_admin_mappings(self, request: operations.PostAdminMappingsRequest) -> operations.PostAdminMappingsResponse:
        r"""Create a new stub mapping
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/__admin/mappings"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAdminMappingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAdminMappings201ApplicationJSON])
                res.post_admin_mappings_201_application_json_object = out

        return res

    
    def post_admin_mappings_find_by_metadata(self, request: operations.PostAdminMappingsFindByMetadataRequest) -> operations.PostAdminMappingsFindByMetadataResponse:
        r"""Find stubs by matching on their metadata
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/__admin/mappings/find-by-metadata"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAdminMappingsFindByMetadataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAdminMappingsFindByMetadata200ApplicationJSON])
                res.post_admin_mappings_find_by_metadata_200_application_json_object = out

        return res

    
    def post_admin_mappings_remove_by_metadata(self, request: operations.PostAdminMappingsRemoveByMetadataRequest) -> operations.PostAdminMappingsRemoveByMetadataResponse:
        r"""Delete stub mappings matching metadata
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/__admin/mappings/remove-by-metadata"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAdminMappingsRemoveByMetadataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_admin_mappings_reset(self) -> operations.PostAdminMappingsResetResponse:
        r"""Reset stub mappings
        Restores stub mappings to the defaults defined back in the backing store
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/__admin/mappings/reset"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAdminMappingsResetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_admin_mappings_save(self) -> operations.PostAdminMappingsSaveResponse:
        r"""Persist stub mappings
        Save all persistent stub mappings to the backing store
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/__admin/mappings/save"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAdminMappingsSaveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_admin_mappings_stub_mapping_id_(self, request: operations.PutAdminMappingsStubMappingIDRequest) -> operations.PutAdminMappingsStubMappingIDResponse:
        r"""Update a stub mapping
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/__admin/mappings/{stubMappingId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAdminMappingsStubMappingIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutAdminMappingsStubMappingID200ApplicationJSON])
                res.put_admin_mappings_stub_mapping_id_200_application_json_object = out
        elif r.status_code == 404:
            pass

        return res

    