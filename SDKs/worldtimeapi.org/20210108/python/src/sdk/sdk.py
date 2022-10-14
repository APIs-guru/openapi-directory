import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations
from . import utils


SERVERS = [
	"http://worldtimeapi.org/api/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def get_ip(self) -> operations.GetIPResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/ip"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIPResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.date_time_json_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error_json_response = out

        return res

    
    
    def get_ip_ipv4_(self, request: operations.GetIPIpv4Request) -> operations.GetIPIpv4Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ip/{ipv4}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIPIpv4Response(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.date_time_json_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error_json_response = out

        return res

    
    
    def get_ip_ipv4_txt(self, request: operations.GetIPIpv4TxtRequest) -> operations.GetIPIpv4TxtResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ip/{ipv4}.txt", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIPIpv4TxtResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.date_time_text_response = r.content
        else:
            if utils.match_content_type(content_type, "text/plain"):
                res.error_text_response = r.content

        return res

    
    
    def get_ip_txt(self) -> operations.GetIPTxtResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/ip.txt"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIPTxtResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.date_time_text_response = r.content
        else:
            if utils.match_content_type(content_type, "text/plain"):
                res.error_text_response = r.content

        return res

    
    
    def get_timezone(self) -> operations.GetTimezoneResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/timezone"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTimezoneResponse(status_code=r.status_code, content_type=content_type)
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.list_json_response = out

        return res

    
    
    def get_timezone_area_(self, request: operations.GetTimezoneAreaRequest) -> operations.GetTimezoneAreaResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/timezone/{area}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTimezoneAreaResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.list_json_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error_json_response = out

        return res

    
    
    def get_timezone_area_location_(self, request: operations.GetTimezoneAreaLocationRequest) -> operations.GetTimezoneAreaLocationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/timezone/{area}/{location}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTimezoneAreaLocationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.date_time_json_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error_json_response = out

        return res

    
    
    def get_timezone_area_location_region_(self, request: operations.GetTimezoneAreaLocationRegionRequest) -> operations.GetTimezoneAreaLocationRegionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/timezone/{area}/{location}/{region}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTimezoneAreaLocationRegionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.date_time_json_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error_json_response = out

        return res

    
    
    def get_timezone_area_location_region_txt(self, request: operations.GetTimezoneAreaLocationRegionTxtRequest) -> operations.GetTimezoneAreaLocationRegionTxtResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/timezone/{area}/{location}/{region}.txt", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTimezoneAreaLocationRegionTxtResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.date_time_text_response = r.content
        else:
            if utils.match_content_type(content_type, "text/plain"):
                res.error_text_response = r.content

        return res

    
    
    def get_timezone_area_location_txt(self, request: operations.GetTimezoneAreaLocationTxtRequest) -> operations.GetTimezoneAreaLocationTxtResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/timezone/{area}/{location}.txt", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTimezoneAreaLocationTxtResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.date_time_text_response = r.content
        else:
            if utils.match_content_type(content_type, "text/plain"):
                res.error_text_response = r.content

        return res

    
    
    def get_timezone_area_txt(self, request: operations.GetTimezoneAreaTxtRequest) -> operations.GetTimezoneAreaTxtResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/timezone/{area}.txt", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTimezoneAreaTxtResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.list_text_response = r.content
        else:
            if utils.match_content_type(content_type, "text/plain"):
                res.error_text_response = r.content

        return res

    
    
    def get_timezone_txt(self) -> operations.GetTimezoneTxtResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/timezone.txt"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTimezoneTxtResponse(status_code=r.status_code, content_type=content_type)
        if True:
            if utils.match_content_type(content_type, "text/plain"):
                res.list_text_response = r.content

        return res

    