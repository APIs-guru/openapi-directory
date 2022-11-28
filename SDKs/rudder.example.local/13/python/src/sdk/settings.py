import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Settings:
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

    
    def get_all_settings(self) -> operations.GetAllSettingsResponse:
        r"""List all settings
        Get the current value of all the settings
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/settings"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAllSettings200ApplicationJSON])
                res.get_all_settings_200_application_json_object = out

        return res

    
    def get_allowed_networks(self, request: operations.GetAllowedNetworksRequest) -> operations.GetAllowedNetworksResponse:
        r"""Get allowed networks for a policy server
        Get the list of allowed networks for a policy server
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/settings/allowed_networks/{nodeId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllowedNetworksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAllowedNetworks200ApplicationJSON])
                res.get_allowed_networks_200_application_json_object = out

        return res

    
    def get_setting(self, request: operations.GetSettingRequest) -> operations.GetSettingResponse:
        r"""Get the value of a setting
        Get the current value of a specific setting
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/settings/{settingId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSettingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSetting200ApplicationJSON])
                res.get_setting_200_application_json_object = out

        return res

    
    def modify_allowed_networks(self, request: operations.ModifyAllowedNetworksRequest) -> operations.ModifyAllowedNetworksResponse:
        r"""Modify allowed networks for a policy server
        Add or delete allowed networks for a policy server
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/settings/allowed_networks/{nodeId}/diff", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ModifyAllowedNetworksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ModifyAllowedNetworks200ApplicationJSON])
                res.modify_allowed_networks_200_application_json_object = out

        return res

    
    def modify_setting(self, request: operations.ModifySettingRequest) -> operations.ModifySettingResponse:
        r"""Set the value of a setting
        Set the current value of a specific setting
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/settings/{settingId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ModifySettingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ModifySetting200ApplicationJSON])
                res.modify_setting_200_application_json_object = out

        return res

    
    def set_allowed_networks(self, request: operations.SetAllowedNetworksRequest) -> operations.SetAllowedNetworksResponse:
        r"""Set allowed networks for a policy server
        Set the list of allowed networks for a policy server
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/settings/allowed_networks/{nodeId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetAllowedNetworksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetAllowedNetworks200ApplicationJSON])
                res.set_allowed_networks_200_application_json_object = out

        return res

    