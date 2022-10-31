import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"http://patrowl.local",
	"http://localhost:5001/engines/nmap/",
	"http://localhost:5004/engines/ssllabs/",
	"http://localhost:5005/engines/arachni/",
	"http://localhost:5006/engines/owl_dns/",
	"http://localhost:5007/engines/virustotal/",
	"http://localhost:5008/engines/urlvoid/",
	"http://localhost:5009/engines/cortex/",
	"http://localhost:5012/engines/owl_leaks/",
	"http://localhost:5013/engines/owl_code/",
	"http://localhost:5014/engines/sslscan/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def clean_scan_page(self, request: operations.CleanScanPageRequest) -> operations.CleanScanPageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/clean/{scanId}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CleanScanPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.api_response = out

        return res

    
    def clean_scans_page(self) -> operations.CleanScansPageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/clean"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CleanScansPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.api_response = out

        return res

    
    def get_finding_page(self, request: operations.GetFindingPageRequest) -> operations.GetFindingPageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/getfindings/{scanId}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFindingPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Findings]])
                res.findings = out

        return res

    
    def start_scan_page(self, request: operations.StartScanPageRequest) -> operations.StartScanPageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/startscan"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StartScanPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.api_response = out

        return res

    
    def status_scan_page(self, request: operations.StatusScanPageRequest) -> operations.StatusScanPageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/status/{scanId}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StatusScanPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.api_response = out

        return res

    
    def status_scans_page(self) -> operations.StatusScansPageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/status"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StatusScansPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.api_response = out

        return res

    
    def stop_scan_page(self, request: operations.StopScanPageRequest) -> operations.StopScanPageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/stop/{scanId}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StopScanPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.api_response = out

        return res

    
    def stop_scans_page(self) -> operations.StopScansPageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/stopscans"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StopScansPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.api_response = out

        return res

    
    def get_default_page(self) -> operations.GetDefaultPageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDefaultPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.api_response = out

        return res

    
    def get_info_page(self) -> operations.GetInfoPageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/info"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInfoPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.api_response = out

        return res

    
    def get_liveness_page(self) -> operations.GetLivenessPageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/liveness"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLivenessPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_readiness_page(self) -> operations.GetReadinessPageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/readiness"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReadinessPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_test_page(self) -> operations.GetTestPageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/test"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTestPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def reload_configuration_page(self) -> operations.ReloadConfigurationPageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/reloadconfig"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReloadConfigurationPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.api_response = out

        return res

    