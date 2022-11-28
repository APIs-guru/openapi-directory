import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class OnDemandEssentials:
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

    
    def create_vod(self, request: operations.CreateVodRequest) -> operations.CreateVodResponse:
        r"""Create an On Demand page
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/ondemand/pages", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateVodResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnDemandPage])
                res.on_demand_page = out

        return res

    
    def create_vod_alt1(self, request: operations.CreateVodAlt1Request) -> operations.CreateVodAlt1Response:
        r"""Create an On Demand page
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/ondemand/pages"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateVodAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnDemandPage])
                res.on_demand_page = out

        return res

    
    def delete_vod_draft(self, request: operations.DeleteVodDraftRequest) -> operations.DeleteVodDraftResponse:
        r"""Delete a draft of an On Demand page
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ondemand/pages/{ondemand_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVodDraftResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.page+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.page+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def edit_vod(self, request: operations.EditVodRequest) -> operations.EditVodResponse:
        r"""Edit an On Demand page
        Enable preorders or publish the page.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ondemand/pages/{ondemand_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EditVodResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.page+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnDemandPage])
                res.on_demand_page = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.page+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.page+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_user_vods(self, request: operations.GetUserVodsRequest) -> operations.GetUserVodsResponse:
        r"""Get all the On Demand pages of a user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/ondemand/pages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserVodsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.page+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.OnDemandPage]])
                res.on_demand_pages = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.page+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_user_vods_alt1(self, request: operations.GetUserVodsAlt1Request) -> operations.GetUserVodsAlt1Response:
        r"""Get all the On Demand pages of a user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/ondemand/pages"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserVodsAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.page+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.OnDemandPage]])
                res.on_demand_pages = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.page+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_vod(self, request: operations.GetVodRequest) -> operations.GetVodResponse:
        r"""Get a specific On Demand page
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ondemand/pages/{ondemand_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVodResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.page+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnDemandPage])
                res.on_demand_page = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.page+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    