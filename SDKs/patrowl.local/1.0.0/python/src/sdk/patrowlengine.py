import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils

class PatrowlEngine:
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

    
    def clean_scan_page(self, request: operations.CleanScanPageRequest) -> operations.CleanScanPageResponse:
        r"""Clean scan
        Clean scan identified by id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/clean/{scanId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CleanScanPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.api_response = out

        return res

    
    def clean_scans_page(self) -> operations.CleanScansPageResponse:
        r"""Clean all scans
        Clean all current scans.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/clean"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CleanScansPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.api_response = out

        return res

    
    def get_finding_page(self, request: operations.GetFindingPageRequest) -> operations.GetFindingPageResponse:
        r"""Get findings on finished scans
        Get findings on finished scans.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/getfindings/{scanId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFindingPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Findings]])
                res.findings = out

        return res

    
    def start_scan_page(self, request: operations.StartScanPageRequest) -> operations.StartScanPageResponse:
        r"""Start a new scan
        Start a new scan.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/startscan"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StartScanPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.api_response = out

        return res

    
    def status_scan_page(self, request: operations.StatusScanPageRequest) -> operations.StatusScanPageResponse:
        r"""Status of a scan
        Status of a scan identified by id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/status/{scanId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StatusScanPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.api_response = out

        return res

    
    def status_scans_page(self) -> operations.StatusScansPageResponse:
        r"""Status on all scans
        Status all current scans.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/status"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StatusScansPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.api_response = out

        return res

    
    def stop_scan_page(self, request: operations.StopScanPageRequest) -> operations.StopScanPageResponse:
        r"""Stop a scan
        Stop a scan identified by id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stop/{scanId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StopScanPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.api_response = out

        return res

    
    def stop_scans_page(self) -> operations.StopScansPageResponse:
        r"""Stop all scans
        Stop all current scans.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/stopscans"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StopScansPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.api_response = out

        return res

    
    def get_default_page(self) -> operations.GetDefaultPageResponse:
        r"""Index page
        Return index page
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDefaultPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.api_response = out

        return res

    
    def get_info_page(self) -> operations.GetInfoPageResponse:
        r"""Engine info page
        Return information on engine.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/info"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInfoPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.api_response = out

        return res

    
    def get_liveness_page(self) -> operations.GetLivenessPageResponse:
        r"""Liveness page
        Return liveness page
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/liveness"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLivenessPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_readiness_page(self) -> operations.GetReadinessPageResponse:
        r"""Readiness page
        Return liveness page
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/readiness"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReadinessPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_test_page(self) -> operations.GetTestPageResponse:
        r"""Test page
        Return test page
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/test"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTestPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def reload_configuration_page(self) -> operations.ReloadConfigurationPageResponse:
        r"""Configuration reloading page
        Reload the configuration file.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/reloadconfig"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReloadConfigurationPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.api_response = out

        return res

    