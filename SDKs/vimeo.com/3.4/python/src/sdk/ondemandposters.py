import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class OnDemandPosters:
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

    
    def add_vod_poster(self, request: operations.AddVodPosterRequest) -> operations.AddVodPosterResponse:
        r"""Add a poster to an On Demand page
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ondemand/pages/{ondemand_id}/pictures", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddVodPosterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Picture])
                res.picture = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def edit_vod_poster(self, request: operations.EditVodPosterRequest) -> operations.EditVodPosterResponse:
        r"""Edit a poster of an On Demand page
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ondemand/pages/{ondemand_id}/pictures/{poster_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EditVodPosterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Picture])
                res.picture = out

        return res

    
    def get_vod_poster(self, request: operations.GetVodPosterRequest) -> operations.GetVodPosterResponse:
        r"""Get a specific poster of an On Demand page
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ondemand/pages/{ondemand_id}/pictures/{poster_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVodPosterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Picture])
                res.picture = out

        return res

    
    def get_vod_posters(self, request: operations.GetVodPostersRequest) -> operations.GetVodPostersResponse:
        r"""Get all the posters of an On Demand page
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ondemand/pages/{ondemand_id}/pictures", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVodPostersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Picture]])
                res.pictures = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    