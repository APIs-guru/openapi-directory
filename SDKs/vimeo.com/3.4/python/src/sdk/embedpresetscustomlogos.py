import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class EmbedPresetsCustomLogos:
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

    
    def create_custom_logo(self, request: operations.CreateCustomLogoRequest) -> operations.CreateCustomLogoResponse:
        r"""Add a custom logo
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/customlogos", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCustomLogoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Picture])
                res.picture = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def create_custom_logo_alt1(self, request: operations.CreateCustomLogoAlt1Request) -> operations.CreateCustomLogoAlt1Response:
        r"""Add a custom logo
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/customlogos"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCustomLogoAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Picture])
                res.picture = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_custom_logo(self, request: operations.GetCustomLogoRequest) -> operations.GetCustomLogoResponse:
        r"""Get a specific custom logo
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/customlogos/{logo_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomLogoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Picture])
                res.picture = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_custom_logo_alt1(self, request: operations.GetCustomLogoAlt1Request) -> operations.GetCustomLogoAlt1Response:
        r"""Get a specific custom logo
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/customlogos/{logo_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomLogoAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Picture])
                res.picture = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_custom_logos(self, request: operations.GetCustomLogosRequest) -> operations.GetCustomLogosResponse:
        r"""Get all the custom logos that belong to a user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/customlogos", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomLogosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Picture]])
                res.pictures = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_custom_logos_alt1(self) -> operations.GetCustomLogosAlt1Response:
        r"""Get all the custom logos that belong to a user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/customlogos"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomLogosAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Picture]])
                res.pictures = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.picture+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    