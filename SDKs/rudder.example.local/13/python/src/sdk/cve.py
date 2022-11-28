import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Cve:
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

    
    def check_cve(self) -> operations.CheckCveResponse:
        r"""Trigger a CVE check
        Trigger a CVE check
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cve/check"
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CheckCveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CheckCve200ApplicationJSON])
                res.check_cve_200_application_json_object = out

        return res

    
    def get_all_cve(self) -> operations.GetAllCveResponse:
        r"""Get all CVE details
        Get all CVE details
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cve"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllCveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAllCve200ApplicationJSON])
                res.get_all_cve_200_application_json_object = out

        return res

    
    def get_cve_check_configuration(self) -> operations.GetCveCheckConfigurationResponse:
        r"""Get CVE check config
        Get CVE check config
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cve/check/config"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCveCheckConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCveCheckConfiguration200ApplicationJSON])
                res.get_cve_check_configuration_200_application_json_object = out

        return res

    
    def get_cve_list(self, request: operations.GetCveListRequest) -> operations.GetCveListResponse:
        r"""Get a list of CVE details
        Get CVE details, from a list passed a paremeter
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cve/list"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCveListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCveList200ApplicationJSON])
                res.get_cve_list_200_application_json_object = out

        return res

    
    def get_last_cve_check(self) -> operations.GetLastCveCheckResponse:
        r"""Get last CVE check result
        Get last CVE check result
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cve/check/last"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLastCveCheckResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLastCveCheck200ApplicationJSON])
                res.get_last_cve_check_200_application_json_object = out

        return res

    
    def read_cv_efrom_fs(self) -> operations.ReadCvEfromFsResponse:
        r"""Update CVE database from file system
        Update CVE database from file system
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cve/update/fs"
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReadCvEfromFsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReadCvEfromFs200ApplicationJSON])
                res.read_cv_efrom_fs_200_application_json_object = out

        return res

    
    def update_cve(self, request: operations.UpdateCveRequest) -> operations.UpdateCveResponse:
        r"""Update CVE database from remote source
        Update CVE database from remote source
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cve/update/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateCveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateCve200ApplicationJSON])
                res.update_cve_200_application_json_object = out

        return res

    
    def update_cve_check_configuration(self, request: operations.UpdateCveCheckConfigurationRequest) -> operations.UpdateCveCheckConfigurationResponse:
        r"""Update cve check config
        Update cve check config
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cve/check/config"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateCveCheckConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateCveCheckConfiguration200ApplicationJSON])
                res.update_cve_check_configuration_200_application_json_object = out

        return res

    