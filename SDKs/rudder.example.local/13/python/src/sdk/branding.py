import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Branding:
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

    
    def get_branding_conf(self) -> operations.GetBrandingConfResponse:
        r"""Get branding configuration
        Get all web interface customization parameters
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/branding"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBrandingConfResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBrandingConf200ApplicationJSON])
                res.get_branding_conf_200_application_json_object = out

        return res

    
    def reload_branding_conf(self) -> operations.ReloadBrandingConfResponse:
        r"""Reload branding file
        Reload the configuration from file
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/branding/reload"
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReloadBrandingConfResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReloadBrandingConf200ApplicationJSON])
                res.reload_branding_conf_200_application_json_object = out

        return res

    
    def update_b_randing_conf(self, request: operations.UpdateBRandingConfRequest) -> operations.UpdateBRandingConfResponse:
        r"""Update web interface customization
        change color, logo, label etc.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/branding"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateBRandingConfResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateBRandingConf200ApplicationJSON])
                res.update_b_randing_conf_200_application_json_object = out

        return res

    