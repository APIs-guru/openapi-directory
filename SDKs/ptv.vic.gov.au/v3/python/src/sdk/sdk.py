

import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"http://timetableapi.ptv.vic.gov.au",
	"https://timetableapi.ptv.vic.gov.au",
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
        
    
    
    
    def departures_get_for_stop(self, request: operations.DeparturesGetForStopRequest) -> operations.DeparturesGetForStopResponse:
        r"""View departures for all routes from a stop
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/departures/route_type/{route_type}/stop/{stop_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeparturesGetForStopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DeparturesResponse])
                res.v3_departures_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DeparturesResponse])
                res.v3_departures_response = out
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out

        return res

    
    def departures_get_for_stop_and_route(self, request: operations.DeparturesGetForStopAndRouteRequest) -> operations.DeparturesGetForStopAndRouteResponse:
        r"""View departures for a specific route from a stop
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/departures/route_type/{route_type}/stop/{stop_id}/route/{route_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeparturesGetForStopAndRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DeparturesResponse])
                res.v3_departures_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DeparturesResponse])
                res.v3_departures_response = out
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out

        return res

    
    def directions_for_direction(self, request: operations.DirectionsForDirectionRequest) -> operations.DirectionsForDirectionResponse:
        r"""View all routes for a direction of travel
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/directions/{direction_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectionsForDirectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DirectionsResponse])
                res.v3_directions_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DirectionsResponse])
                res.v3_directions_response = out
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out

        return res

    
    def directions_for_direction_and_type(self, request: operations.DirectionsForDirectionAndTypeRequest) -> operations.DirectionsForDirectionAndTypeResponse:
        r"""View all routes of a particular type for a direction of travel
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/directions/{direction_id}/route_type/{route_type}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectionsForDirectionAndTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DirectionsResponse])
                res.v3_directions_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DirectionsResponse])
                res.v3_directions_response = out
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out

        return res

    
    def directions_for_route(self, request: operations.DirectionsForRouteRequest) -> operations.DirectionsForRouteResponse:
        r"""View directions that a route travels in
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/directions/route/{route_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectionsForRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DirectionsResponse])
                res.v3_directions_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DirectionsResponse])
                res.v3_directions_response = out
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out

        return res

    
    def disruptions_get_all_disruptions(self, request: operations.DisruptionsGetAllDisruptionsRequest) -> operations.DisruptionsGetAllDisruptionsResponse:
        r"""View all disruptions for all route types
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/disruptions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisruptionsGetAllDisruptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DisruptionsResponse])
                res.v3_disruptions_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DisruptionsResponse])
                res.v3_disruptions_response = out
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out

        return res

    
    def disruptions_get_disruption_by_id(self, request: operations.DisruptionsGetDisruptionByIDRequest) -> operations.DisruptionsGetDisruptionByIDResponse:
        r"""View a specific disruption
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/disruptions/{disruption_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisruptionsGetDisruptionByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DisruptionResponse])
                res.v3_disruption_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DisruptionResponse])
                res.v3_disruption_response = out
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out

        return res

    
    def disruptions_get_disruption_modes(self, request: operations.DisruptionsGetDisruptionModesRequest) -> operations.DisruptionsGetDisruptionModesResponse:
        r"""Get all disruption modes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/disruptions/modes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisruptionsGetDisruptionModesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DisruptionModesResponse])
                res.v3_disruption_modes_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DisruptionModesResponse])
                res.v3_disruption_modes_response = out
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out

        return res

    
    def disruptions_get_disruptions_by_route(self, request: operations.DisruptionsGetDisruptionsByRouteRequest) -> operations.DisruptionsGetDisruptionsByRouteResponse:
        r"""View all disruptions for a particular route
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/disruptions/route/{route_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisruptionsGetDisruptionsByRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DisruptionsResponse])
                res.v3_disruptions_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DisruptionsResponse])
                res.v3_disruptions_response = out
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out

        return res

    
    def disruptions_get_disruptions_by_route_and_stop(self, request: operations.DisruptionsGetDisruptionsByRouteAndStopRequest) -> operations.DisruptionsGetDisruptionsByRouteAndStopResponse:
        r"""View all disruptions for a particular route and stop
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/disruptions/route/{route_id}/stop/{stop_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisruptionsGetDisruptionsByRouteAndStopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DisruptionsResponse])
                res.v3_disruptions_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DisruptionsResponse])
                res.v3_disruptions_response = out
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out

        return res

    
    def disruptions_get_disruptions_by_stop(self, request: operations.DisruptionsGetDisruptionsByStopRequest) -> operations.DisruptionsGetDisruptionsByStopResponse:
        r"""View all disruptions for a particular stop
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/disruptions/stop/{stop_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisruptionsGetDisruptionsByStopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DisruptionsResponse])
                res.v3_disruptions_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DisruptionsResponse])
                res.v3_disruptions_response = out
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out

        return res

    
    def fare_estimate_get_fare_estimate_by_zone(self, request: operations.FareEstimateGetFareEstimateByZoneRequest) -> operations.FareEstimateGetFareEstimateByZoneResponse:
        r"""Estimate a fare by zone
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/fare_estimate/min_zone/{minZone}/max_zone/{maxZone}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FareEstimateGetFareEstimateByZoneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.v3_fare_estimate_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.v3_fare_estimate_response = out
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out

        return res

    
    def outlets_get_all_outlets(self, request: operations.OutletsGetAllOutletsRequest) -> operations.OutletsGetAllOutletsResponse:
        r"""List all ticket outlets
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/outlets"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OutletsGetAllOutletsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3OutletResponse])
                res.v3_outlet_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3OutletResponse])
                res.v3_outlet_response = out
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out

        return res

    
    def outlets_get_outlets_by_geolocation(self, request: operations.OutletsGetOutletsByGeolocationRequest) -> operations.OutletsGetOutletsByGeolocationResponse:
        r"""List ticket outlets near a specific location
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/outlets/location/{latitude},{longitude}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OutletsGetOutletsByGeolocationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3OutletGeolocationResponse])
                res.v3_outlet_geolocation_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3OutletGeolocationResponse])
                res.v3_outlet_geolocation_response = out
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out

        return res

    
    def patterns_get_pattern_by_run(self, request: operations.PatternsGetPatternByRunRequest) -> operations.PatternsGetPatternByRunResponse:
        r"""View the stopping pattern for a specific trip/service run
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/pattern/run/{run_ref}/route_type/{route_type}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PatternsGetPatternByRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3StoppingPattern])
                res.v3_stopping_pattern = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3StoppingPattern])
                res.v3_stopping_pattern = out
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out

        return res

    
    def route_types_get_route_types(self, request: operations.RouteTypesGetRouteTypesRequest) -> operations.RouteTypesGetRouteTypesResponse:
        r"""View all route types and their names
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/route_types"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RouteTypesGetRouteTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3RouteTypesResponse])
                res.v3_route_types_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3RouteTypesResponse])
                res.v3_route_types_response = out
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out

        return res

    
    def routes_one_or_more_routes(self, request: operations.RoutesOneOrMoreRoutesRequest) -> operations.RoutesOneOrMoreRoutesResponse:
        r"""View route names and numbers for all routes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/routes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RoutesOneOrMoreRoutesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3RouteResponse])
                res.v3_route_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3RouteResponse])
                res.v3_route_response = out
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out

        return res

    
    def routes_route_from_id(self, request: operations.RoutesRouteFromIDRequest) -> operations.RoutesRouteFromIDResponse:
        r"""View route name and number for specific route ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/routes/{route_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RoutesRouteFromIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3RouteResponse])
                res.v3_route_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3RouteResponse])
                res.v3_route_response = out
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out

        return res

    
    def runs_for_route(self, request: operations.RunsForRouteRequest) -> operations.RunsForRouteResponse:
        r"""View all trip/service runs for a specific route ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/runs/route/{route_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RunsForRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3RunsResponse])
                res.v3_runs_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3RunsResponse])
                res.v3_runs_response = out
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out

        return res

    
    def runs_for_route_and_route_type(self, request: operations.RunsForRouteAndRouteTypeRequest) -> operations.RunsForRouteAndRouteTypeResponse:
        r"""View all trip/service runs for a specific route ID and route type
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/runs/route/{route_id}/route_type/{route_type}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RunsForRouteAndRouteTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3RunsResponse])
                res.v3_runs_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3RunsResponse])
                res.v3_runs_response = out
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out

        return res

    
    def runs_for_run(self, request: operations.RunsForRunRequest) -> operations.RunsForRunResponse:
        r"""View all trip/service runs for a specific run_ref
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/runs/{run_ref}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RunsForRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3RunsResponse])
                res.v3_runs_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3RunsResponse])
                res.v3_runs_response = out
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out

        return res

    
    def runs_for_run_and_route_type(self, request: operations.RunsForRunAndRouteTypeRequest) -> operations.RunsForRunAndRouteTypeResponse:
        r"""View the trip/service run for a specific run_ref and route type
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/runs/{run_ref}/route_type/{route_type}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RunsForRunAndRouteTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3RunResponse])
                res.v3_run_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3RunResponse])
                res.v3_run_response = out
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out

        return res

    
    def search_search(self, request: operations.SearchSearchRequest) -> operations.SearchSearchResponse:
        r"""View stops, routes and myki ticket outlets that match the search term
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/search/{search_term}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3SearchResult])
                res.v3_search_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3SearchResult])
                res.v3_search_result = out
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out

        return res

    
    def stops_stop_details(self, request: operations.StopsStopDetailsRequest) -> operations.StopsStopDetailsResponse:
        r"""View facilities at a specific stop (Metro and V/Line stations only)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/stops/{stop_id}/route_type/{route_type}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StopsStopDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3StopResponse])
                res.v3_stop_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3StopResponse])
                res.v3_stop_response = out
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out

        return res

    
    def stops_stops_by_geolocation(self, request: operations.StopsStopsByGeolocationRequest) -> operations.StopsStopsByGeolocationResponse:
        r"""View all stops near a specific location
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/stops/location/{latitude},{longitude}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StopsStopsByGeolocationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3StopsByDistanceResponse])
                res.v3_stops_by_distance_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3StopsByDistanceResponse])
                res.v3_stops_by_distance_response = out
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out

        return res

    
    def stops_stops_for_route(self, request: operations.StopsStopsForRouteRequest) -> operations.StopsStopsForRouteResponse:
        r"""View all stops on a specific route
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/stops/route/{route_id}/route_type/{route_type}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StopsStopsForRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3StopsOnRouteResponse])
                res.v3_stops_on_route_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3StopsOnRouteResponse])
                res.v3_stops_on_route_response = out
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out

        return res

    