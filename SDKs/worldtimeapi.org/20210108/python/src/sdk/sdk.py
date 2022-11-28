

import requests
from typing import Any,List,Optional
from sdk.models import operations
from . import utils




SERVERS = [
	"http://worldtimeapi.org/api/",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def get_ip(self) -> operations.GetIPResponse:
        r"""request the current time based on the ip of the request. note: this is a \"best guess\" obtained from open-source data.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ip"
        
        
        client = self._client
        
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
        r"""request the current time based on the ip of the request. note: this is a \"best guess\" obtained from open-source data.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ip/{ipv4}", request.path_params)
        
        
        client = self._client
        
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
        r"""request the current time based on the ip of the request. note: this is a \"best guess\" obtained from open-source data.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ip/{ipv4}.txt", request.path_params)
        
        
        client = self._client
        
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
        r"""request the current time based on the ip of the request. note: this is a \"best guess\" obtained from open-source data.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ip.txt"
        
        
        client = self._client
        
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
        r"""a listing of all timezones.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/timezone"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTimezoneResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.list_json_response = out

        return res

    
    def get_timezone_area_(self, request: operations.GetTimezoneAreaRequest) -> operations.GetTimezoneAreaResponse:
        r"""a listing of all timezones available for that area.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/timezone/{area}", request.path_params)
        
        
        client = self._client
        
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
        r"""request the current time for a timezone.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/timezone/{area}/{location}", request.path_params)
        
        
        client = self._client
        
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
        r"""request the current time for a timezone.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/timezone/{area}/{location}/{region}", request.path_params)
        
        
        client = self._client
        
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
        r"""request the current time for a timezone.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/timezone/{area}/{location}/{region}.txt", request.path_params)
        
        
        client = self._client
        
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
        r"""request the current time for a timezone.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/timezone/{area}/{location}.txt", request.path_params)
        
        
        client = self._client
        
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
        r"""a listing of all timezones available for that area.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/timezone/{area}.txt", request.path_params)
        
        
        client = self._client
        
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
        r"""a listing of all timezones.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/timezone.txt"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTimezoneTxtResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "text/plain"):
                res.list_text_response = r.content

        return res

    