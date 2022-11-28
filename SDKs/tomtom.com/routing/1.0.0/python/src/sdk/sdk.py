

import requests
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.tomtom.com",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
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
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def get_routing_version_number_calculate_reachable_range_origin_content_type_(self, request: operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest) -> operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse:
        r"""Reachable Range
        Calculates a set of locations that can be reached from the origin point.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/routing/{versionNumber}/calculateReachableRange/{origin}/{contentType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 408:
            pass
        elif r.status_code == 414:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass
        elif r.status_code == 504:
            pass
        elif r.status_code == 596:
            pass

        return res

    
    def get_routing_version_number_calculate_route_locations_content_type_(self, request: operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest) -> operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse:
        r"""Calculate Route
        Calculates a route between an origin and a destination.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/routing/{versionNumber}/calculateRoute/{locations}/{contentType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 408:
            pass
        elif r.status_code == 414:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass
        elif r.status_code == 504:
            pass
        elif r.status_code == 596:
            pass

        return res

    
    def post_routing_version_number_calculate_reachable_range_origin_content_type_(self, request: operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest) -> operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse:
        r"""Reachable Range
        Calculates a set of locations that can be reached from the origin point. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/routing/{versionNumber}/calculateReachableRange/{origin}/{contentType}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 408:
            pass
        elif r.status_code == 414:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass
        elif r.status_code == 504:
            pass
        elif r.status_code == 596:
            pass

        return res

    
    def post_routing_version_number_calculate_route_locations_content_type_(self, request: operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequest) -> operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeResponse:
        r"""Calculate Route
        Calculates a route between an origin and a destination. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/routing/{versionNumber}/calculateRoute/{locations}/{contentType}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 408:
            pass
        elif r.status_code == 414:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass
        elif r.status_code == 504:
            pass
        elif r.status_code == 596:
            pass

        return res

    