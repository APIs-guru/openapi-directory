

import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.digital.tfl.gov.uk",
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
        
    
    
    
    def accident_stats_get(self, request: operations.AccidentStatsGetRequest) -> operations.AccidentStatsGetResponse:
        r"""Gets all accident details for accidents occuring in the specified year
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/AccidentStats/{year}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccidentStatsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesAccidentStatsAccidentDetail]])
                res.tfl_api_presentation_entities_accident_stats_accident_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesAccidentStatsAccidentDetail]])
                res.tfl_api_presentation_entities_accident_stats_accident_details = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def air_quality_get(self) -> operations.AirQualityGetResponse:
        r"""Gets air quality data feed
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/AirQuality"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AirQualityGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def bike_point_get(self, request: operations.BikePointGetRequest) -> operations.BikePointGetResponse:
        r"""Gets the bike point with the given id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/BikePoint/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.BikePointGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesPlace])
                res.tfl_api_presentation_entities_place = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesPlace])
                res.tfl_api_presentation_entities_place = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def bike_point_get_all(self) -> operations.BikePointGetAllResponse:
        r"""Gets all bike point locations. The Place object has an addtionalProperties array which contains the nbBikes, nbDocks and nbSpaces
                    numbers which give the status of the BikePoint. A mismatch in these numbers i.e. nbDocks - (nbBikes + nbSpaces) != 0 indicates broken docks.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/BikePoint"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.BikePointGetAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesPlace]])
                res.tfl_api_presentation_entities_places = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesPlace]])
                res.tfl_api_presentation_entities_places = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def bike_point_search(self, request: operations.BikePointSearchRequest) -> operations.BikePointSearchResponse:
        r"""Search for bike stations by their name, a bike point's name often contains information about the name of the street
                    or nearby landmarks, for example. Note that the search result does not contain the PlaceProperties i.e. the status
                    or occupancy of the BikePoint, to get that information you should retrieve the BikePoint by its id on /BikePoint/id.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/BikePoint/Search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BikePointSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesPlace]])
                res.tfl_api_presentation_entities_places = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesPlace]])
                res.tfl_api_presentation_entities_places = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def cabwise_get(self, request: operations.CabwiseGetRequest) -> operations.CabwiseGetResponse:
        r"""Gets taxis and minicabs contact information
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Cabwise/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CabwiseGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_occupancy_car_park(self) -> operations.GetOccupancyCarParkResponse:
        r"""Gets the occupancy for all car parks that have occupancy data
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Occupancy/CarPark"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOccupancyCarParkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesCarParkOccupancy]])
                res.tfl_api_presentation_entities_car_park_occupancies = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesCarParkOccupancy]])
                res.tfl_api_presentation_entities_car_park_occupancies = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_road_ids_(self, request: operations.GetRoadIdsRequest) -> operations.GetRoadIdsResponse:
        r"""Gets the road with the specified id (e.g. A1)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Road/{ids}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRoadIdsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesRoadCorridor]])
                res.tfl_api_presentation_entities_road_corridors = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesRoadCorridor]])
                res.tfl_api_presentation_entities_road_corridors = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_stop_point_search(self, request: operations.GetStopPointSearchRequest) -> operations.GetStopPointSearchResponse:
        r"""Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/StopPoint/Search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStopPointSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesSearchResponse])
                res.tfl_api_presentation_entities_search_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesSearchResponse])
                res.tfl_api_presentation_entities_search_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_stop_point_id_place_types(self, request: operations.GetStopPointIDPlaceTypesRequest) -> operations.GetStopPointIDPlaceTypesResponse:
        r"""Get a list of places corresponding to a given id and place types.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/StopPoint/{id}/placeTypes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStopPointIDPlaceTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesPlace]])
                res.tfl_api_presentation_entities_places = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesPlace]])
                res.tfl_api_presentation_entities_places = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def journey_journey_results(self, request: operations.JourneyJourneyResultsRequest) -> operations.JourneyJourneyResultsResponse:
        r"""Perform a Journey Planner search from the parameters specified in simple types
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Journey/JourneyResults/{from}/to/{to}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.JourneyJourneyResultsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesJourneyPlannerItineraryResult])
                res.tfl_api_presentation_entities_journey_planner_itinerary_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesJourneyPlannerItineraryResult])
                res.tfl_api_presentation_entities_journey_planner_itinerary_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def journey_meta(self) -> operations.JourneyMetaResponse:
        r"""Gets a list of all of the available journey planner modes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Journey/Meta/Modes"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.JourneyMetaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesMode]])
                res.tfl_api_presentation_entities_modes = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesMode]])
                res.tfl_api_presentation_entities_modes = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def line_arrivals(self, request: operations.LineArrivalsRequest) -> operations.LineArrivalsResponse:
        r"""Get the list of arrival predictions for given line ids based at the given stop
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Line/{ids}/Arrivals/{stopPointId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LineArrivalsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesPrediction]])
                res.tfl_api_presentation_entities_predictions = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesPrediction]])
                res.tfl_api_presentation_entities_predictions = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def line_disruption(self, request: operations.LineDisruptionRequest) -> operations.LineDisruptionResponse:
        r"""Get disruptions for the given line ids
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Line/{ids}/Disruption", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LineDisruptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesDisruption]])
                res.tfl_api_presentation_entities_disruptions = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesDisruption]])
                res.tfl_api_presentation_entities_disruptions = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def line_disruption_by_mode(self, request: operations.LineDisruptionByModeRequest) -> operations.LineDisruptionByModeResponse:
        r"""Get disruptions for all lines of the given modes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Line/Mode/{modes}/Disruption", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LineDisruptionByModeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesDisruption]])
                res.tfl_api_presentation_entities_disruptions = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesDisruption]])
                res.tfl_api_presentation_entities_disruptions = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def line_get(self, request: operations.LineGetRequest) -> operations.LineGetResponse:
        r"""Gets lines that match the specified line ids.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Line/{ids}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LineGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesLine]])
                res.tfl_api_presentation_entities_lines = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesLine]])
                res.tfl_api_presentation_entities_lines = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def line_get_by_mode(self, request: operations.LineGetByModeRequest) -> operations.LineGetByModeResponse:
        r"""Gets lines that serve the given modes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Line/Mode/{modes}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LineGetByModeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesLine]])
                res.tfl_api_presentation_entities_lines = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesLine]])
                res.tfl_api_presentation_entities_lines = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def line_line_routes_by_ids(self, request: operations.LineLineRoutesByIdsRequest) -> operations.LineLineRoutesByIdsResponse:
        r"""Get all valid routes for given line ids, including the name and id of the originating and terminating stops for each route.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Line/{ids}/Route", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LineLineRoutesByIdsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesLine]])
                res.tfl_api_presentation_entities_lines = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesLine]])
                res.tfl_api_presentation_entities_lines = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def line_meta_disruption_categories(self) -> operations.LineMetaDisruptionCategoriesResponse:
        r"""Gets a list of valid disruption categories
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Line/Meta/DisruptionCategories"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LineMetaDisruptionCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.line_meta_disruption_categories_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.line_meta_disruption_categories_200_text_json_strings = out

        return res

    
    def line_meta_modes(self) -> operations.LineMetaModesResponse:
        r"""Gets a list of valid modes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Line/Meta/Modes"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LineMetaModesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesMode]])
                res.tfl_api_presentation_entities_modes = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesMode]])
                res.tfl_api_presentation_entities_modes = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def line_meta_service_types(self) -> operations.LineMetaServiceTypesResponse:
        r"""Gets a list of valid ServiceTypes to filter on
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Line/Meta/ServiceTypes"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LineMetaServiceTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.line_meta_service_types_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.line_meta_service_types_200_text_json_strings = out

        return res

    
    def line_meta_severity(self) -> operations.LineMetaSeverityResponse:
        r"""Gets a list of valid severity codes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Line/Meta/Severity"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LineMetaSeverityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesStatusSeverity]])
                res.tfl_api_presentation_entities_status_severities = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesStatusSeverity]])
                res.tfl_api_presentation_entities_status_severities = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def line_route(self, request: operations.LineRouteRequest) -> operations.LineRouteResponse:
        r"""Get all valid routes for all lines, including the name and id of the originating and terminating stops for each route.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Line/Route"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LineRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesLine]])
                res.tfl_api_presentation_entities_lines = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesLine]])
                res.tfl_api_presentation_entities_lines = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def line_route_by_mode(self, request: operations.LineRouteByModeRequest) -> operations.LineRouteByModeResponse:
        r"""Gets all lines and their valid routes for given modes, including the name and id of the originating and terminating stops for each route
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Line/Mode/{modes}/Route", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LineRouteByModeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesLine]])
                res.tfl_api_presentation_entities_lines = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesLine]])
                res.tfl_api_presentation_entities_lines = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def line_route_sequence(self, request: operations.LineRouteSequenceRequest) -> operations.LineRouteSequenceResponse:
        r"""Gets all valid routes for given line id, including the sequence of stops on each route.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Line/{id}/Route/Sequence/{direction}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LineRouteSequenceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesRouteSequence])
                res.tfl_api_presentation_entities_route_sequence = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesRouteSequence])
                res.tfl_api_presentation_entities_route_sequence = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def line_search(self, request: operations.LineSearchRequest) -> operations.LineSearchResponse:
        r"""Search for lines or routes matching the query string
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Line/Search/{query}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LineSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesRouteSearchResponse])
                res.tfl_api_presentation_entities_route_search_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesRouteSearchResponse])
                res.tfl_api_presentation_entities_route_search_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def line_status(self, request: operations.LineStatusRequest) -> operations.LineStatusResponse:
        r"""Gets the line status for given line ids during the provided dates e.g Minor Delays
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Line/{ids}/Status/{StartDate}/to/{EndDate}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LineStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesLine]])
                res.tfl_api_presentation_entities_lines = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesLine]])
                res.tfl_api_presentation_entities_lines = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def line_status_by_ids(self, request: operations.LineStatusByIdsRequest) -> operations.LineStatusByIdsResponse:
        r"""Gets the line status of for given line ids e.g Minor Delays
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Line/{ids}/Status", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LineStatusByIdsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesLine]])
                res.tfl_api_presentation_entities_lines = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesLine]])
                res.tfl_api_presentation_entities_lines = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def line_status_by_mode(self, request: operations.LineStatusByModeRequest) -> operations.LineStatusByModeResponse:
        r"""Gets the line status of for all lines for the given modes
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Line/Mode/{modes}/Status", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LineStatusByModeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesLine]])
                res.tfl_api_presentation_entities_lines = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesLine]])
                res.tfl_api_presentation_entities_lines = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def line_status_by_severity(self, request: operations.LineStatusBySeverityRequest) -> operations.LineStatusBySeverityResponse:
        r"""Gets the line status for all lines with a given severity
                    A list of valid severity codes can be obtained from a call to Line/Meta/Severity
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Line/Status/{severity}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LineStatusBySeverityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesLine]])
                res.tfl_api_presentation_entities_lines = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesLine]])
                res.tfl_api_presentation_entities_lines = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def line_stop_points(self, request: operations.LineStopPointsRequest) -> operations.LineStopPointsResponse:
        r"""Gets a list of the stations that serve the given line id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Line/{id}/StopPoints", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LineStopPointsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesStopPoint]])
                res.tfl_api_presentation_entities_stop_points = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesStopPoint]])
                res.tfl_api_presentation_entities_stop_points = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def line_timetable(self, request: operations.LineTimetableRequest) -> operations.LineTimetableResponse:
        r"""Gets the timetable for a specified station on the give line
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Line/{id}/Timetable/{fromStopPointId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LineTimetableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesTimetableResponse])
                res.tfl_api_presentation_entities_timetable_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesTimetableResponse])
                res.tfl_api_presentation_entities_timetable_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def line_timetable_to(self, request: operations.LineTimetableToRequest) -> operations.LineTimetableToResponse:
        r"""Gets the timetable for a specified station on the give line with specified destination
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Line/{id}/Timetable/{fromStopPointId}/to/{toStopPointId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LineTimetableToResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesTimetableResponse])
                res.tfl_api_presentation_entities_timetable_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesTimetableResponse])
                res.tfl_api_presentation_entities_timetable_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def mode_arrivals(self, request: operations.ModeArrivalsRequest) -> operations.ModeArrivalsResponse:
        r"""Gets the next arrival predictions for all stops of a given mode
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Mode/{mode}/Arrivals", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ModeArrivalsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesPrediction]])
                res.tfl_api_presentation_entities_predictions = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesPrediction]])
                res.tfl_api_presentation_entities_predictions = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def mode_get_active_service_types(self) -> operations.ModeGetActiveServiceTypesResponse:
        r"""Returns the service type active for a mode.
                    Currently only supports tube
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Mode/ActiveServiceTypes"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ModeGetActiveServiceTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesActiveServiceType]])
                res.tfl_api_presentation_entities_active_service_types = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesActiveServiceType]])
                res.tfl_api_presentation_entities_active_service_types = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def occupancy_get(self, request: operations.OccupancyGetRequest) -> operations.OccupancyGetResponse:
        r"""Gets the occupancy for a car park with a given id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Occupancy/CarPark/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OccupancyGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesCarParkOccupancy])
                res.tfl_api_presentation_entities_car_park_occupancy = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesCarParkOccupancy])
                res.tfl_api_presentation_entities_car_park_occupancy = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def occupancy_get_all_charge_connector_status(self) -> operations.OccupancyGetAllChargeConnectorStatusResponse:
        r"""Gets the occupancy for all charge connectors
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Occupancy/ChargeConnector"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OccupancyGetAllChargeConnectorStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesChargeConnectorOccupancy]])
                res.tfl_api_presentation_entities_charge_connector_occupancies = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesChargeConnectorOccupancy]])
                res.tfl_api_presentation_entities_charge_connector_occupancies = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def occupancy_get_bike_points_occupancies(self, request: operations.OccupancyGetBikePointsOccupanciesRequest) -> operations.OccupancyGetBikePointsOccupanciesResponse:
        r"""Get the occupancy for bike points.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Occupancy/BikePoints/{ids}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OccupancyGetBikePointsOccupanciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesBikePointOccupancy]])
                res.tfl_api_presentation_entities_bike_point_occupancies = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesBikePointOccupancy]])
                res.tfl_api_presentation_entities_bike_point_occupancies = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def occupancy_get_charge_connector_status(self, request: operations.OccupancyGetChargeConnectorStatusRequest) -> operations.OccupancyGetChargeConnectorStatusResponse:
        r"""Gets the occupancy for a charge connectors with a given id (sourceSystemPlaceId)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Occupancy/ChargeConnector/{ids}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OccupancyGetChargeConnectorStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesChargeConnectorOccupancy]])
                res.tfl_api_presentation_entities_charge_connector_occupancies = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesChargeConnectorOccupancy]])
                res.tfl_api_presentation_entities_charge_connector_occupancies = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def place_get(self, request: operations.PlaceGetRequest) -> operations.PlaceGetResponse:
        r"""Gets the place with the given id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Place/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PlaceGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesPlace]])
                res.tfl_api_presentation_entities_places = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesPlace]])
                res.tfl_api_presentation_entities_places = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def place_get_at(self, request: operations.PlaceGetAtRequest) -> operations.PlaceGetAtResponse:
        r"""Gets any places of the given type whose geography intersects the given latitude and longitude. In practice this means the Place
                    must be polygonal e.g. a BoroughBoundary.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Place/{type}/At/{Lat}/{Lon}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PlaceGetAtResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def place_get_by_geo(self, request: operations.PlaceGetByGeoRequest) -> operations.PlaceGetByGeoResponse:
        r"""Gets the places that lie within a geographic region. The geographic region of interest can either be specified
                    by using a lat/lon geo-point and a radius in metres to return places within the locus defined by the lat/lon of
                    its centre or alternatively, by the use of a bounding box defined by the lat/lon of its north-west and south-east corners.
                    Optionally filters on type and can strip properties for a smaller payload.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Place"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PlaceGetByGeoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesStopPoint]])
                res.tfl_api_presentation_entities_stop_points = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesStopPoint]])
                res.tfl_api_presentation_entities_stop_points = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def place_get_by_type(self, request: operations.PlaceGetByTypeRequest) -> operations.PlaceGetByTypeResponse:
        r"""Gets all places of a given type
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Place/Type/{types}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PlaceGetByTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesPlace]])
                res.tfl_api_presentation_entities_places = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesPlace]])
                res.tfl_api_presentation_entities_places = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def place_get_overlay(self, request: operations.PlaceGetOverlayRequest) -> operations.PlaceGetOverlayResponse:
        r"""Gets the place overlay for a given set of co-ordinates and a given width/height.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Place/{type}/overlay/{z}/{Lat}/{Lon}/{width}/{height}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PlaceGetOverlayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def place_get_streets_by_post_code(self, request: operations.PlaceGetStreetsByPostCodeRequest) -> operations.PlaceGetStreetsByPostCodeResponse:
        r"""Gets the set of streets associated with a post code.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Place/Address/Streets/{Postcode}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PlaceGetStreetsByPostCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def place_meta_categories(self) -> operations.PlaceMetaCategoriesResponse:
        r"""Gets a list of all of the available place property categories and keys.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Place/Meta/Categories"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlaceMetaCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesPlaceCategory]])
                res.tfl_api_presentation_entities_place_categories = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesPlaceCategory]])
                res.tfl_api_presentation_entities_place_categories = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def place_meta_place_types(self) -> operations.PlaceMetaPlaceTypesResponse:
        r"""Gets a list of the available types of Place.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Place/Meta/PlaceTypes"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlaceMetaPlaceTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesPlaceCategory]])
                res.tfl_api_presentation_entities_place_categories = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesPlaceCategory]])
                res.tfl_api_presentation_entities_place_categories = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def place_search(self, request: operations.PlaceSearchRequest) -> operations.PlaceSearchResponse:
        r"""Gets all places that matches the given query
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Place/Search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PlaceSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesPlace]])
                res.tfl_api_presentation_entities_places = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesPlace]])
                res.tfl_api_presentation_entities_places = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def road_disrupted_streets(self, request: operations.RoadDisruptedStreetsRequest) -> operations.RoadDisruptedStreetsResponse:
        r"""Gets a list of disrupted streets. If no date filters are provided, current disruptions are returned.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Road/all/Street/Disruption"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RoadDisruptedStreetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def road_disruption(self, request: operations.RoadDisruptionRequest) -> operations.RoadDisruptionResponse:
        r"""Get active disruptions, filtered by road ids
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Road/{ids}/Disruption", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RoadDisruptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/geo+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesRoadDisruption]])
                res.tfl_api_presentation_entities_road_disruptions = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesRoadDisruption]])
                res.tfl_api_presentation_entities_road_disruptions = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesRoadDisruption]])
                res.tfl_api_presentation_entities_road_disruptions = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def road_disruption_by_id(self, request: operations.RoadDisruptionByIDRequest) -> operations.RoadDisruptionByIDResponse:
        r"""Gets a list of active disruptions filtered by disruption Ids.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Road/all/Disruption/{disruptionIds}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RoadDisruptionByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/geo+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesRoadDisruption])
                res.tfl_api_presentation_entities_road_disruption = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesRoadDisruption])
                res.tfl_api_presentation_entities_road_disruption = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesRoadDisruption])
                res.tfl_api_presentation_entities_road_disruption = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def road_get(self) -> operations.RoadGetResponse:
        r"""Gets all roads managed by TfL
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Road"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RoadGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesRoadCorridor]])
                res.tfl_api_presentation_entities_road_corridors = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesRoadCorridor]])
                res.tfl_api_presentation_entities_road_corridors = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def road_meta_categories(self) -> operations.RoadMetaCategoriesResponse:
        r"""Gets a list of valid RoadDisruption categories
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Road/Meta/Categories"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RoadMetaCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.road_meta_categories_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.road_meta_categories_200_text_json_strings = out

        return res

    
    def road_meta_severities(self) -> operations.RoadMetaSeveritiesResponse:
        r"""Gets a list of valid RoadDisruption severity codes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Road/Meta/Severities"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RoadMetaSeveritiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesStatusSeverity]])
                res.tfl_api_presentation_entities_status_severities = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesStatusSeverity]])
                res.tfl_api_presentation_entities_status_severities = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def road_status(self, request: operations.RoadStatusRequest) -> operations.RoadStatusResponse:
        r"""Gets the specified roads with the status aggregated over the date range specified, or now until the end of today if no dates are passed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Road/{ids}/Status", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RoadStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesRoadCorridor]])
                res.tfl_api_presentation_entities_road_corridors = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesRoadCorridor]])
                res.tfl_api_presentation_entities_road_corridors = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def search_bus_schedules(self, request: operations.SearchBusSchedulesRequest) -> operations.SearchBusSchedulesResponse:
        r"""Searches the bus schedules folder on S3 for a given bus number.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Search/BusSchedules"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBusSchedulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesSearchResponse])
                res.tfl_api_presentation_entities_search_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesSearchResponse])
                res.tfl_api_presentation_entities_search_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def search_get(self, request: operations.SearchGetRequest) -> operations.SearchGetResponse:
        r"""Search the site for occurrences of the query string. The maximum number of results returned is equal to the maximum page size
                    of 100. To return subsequent pages, use the paginated overload.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesSearchResponse])
                res.tfl_api_presentation_entities_search_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesSearchResponse])
                res.tfl_api_presentation_entities_search_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def search_meta_categories(self) -> operations.SearchMetaCategoriesResponse:
        r"""Gets the available search categories.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Search/Meta/Categories"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchMetaCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.search_meta_categories_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.search_meta_categories_200_text_json_strings = out

        return res

    
    def search_meta_search_providers(self) -> operations.SearchMetaSearchProvidersResponse:
        r"""Gets the available searchProvider names.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Search/Meta/SearchProviders"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchMetaSearchProvidersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.search_meta_search_providers_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.search_meta_search_providers_200_text_json_strings = out

        return res

    
    def search_meta_sorts(self) -> operations.SearchMetaSortsResponse:
        r"""Gets the available sorting options.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Search/Meta/Sorts"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchMetaSortsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.search_meta_sorts_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.search_meta_sorts_200_text_json_strings = out

        return res

    
    def stop_point_arrival_departures(self, request: operations.StopPointArrivalDeparturesRequest) -> operations.StopPointArrivalDeparturesResponse:
        r"""Gets the list of arrival and departure predictions for the given stop point id (overground, tfl rail and thameslink only)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/StopPoint/{id}/ArrivalDepartures", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StopPointArrivalDeparturesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesArrivalDeparture]])
                res.tfl_api_presentation_entities_arrival_departures = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesArrivalDeparture]])
                res.tfl_api_presentation_entities_arrival_departures = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def stop_point_arrivals(self, request: operations.StopPointArrivalsRequest) -> operations.StopPointArrivalsResponse:
        r"""Gets the list of arrival predictions for the given stop point id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/StopPoint/{id}/Arrivals", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StopPointArrivalsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesPrediction]])
                res.tfl_api_presentation_entities_predictions = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesPrediction]])
                res.tfl_api_presentation_entities_predictions = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def stop_point_crowding(self, request: operations.StopPointCrowdingRequest) -> operations.StopPointCrowdingResponse:
        r"""Gets all the Crowding data (static) for the StopPointId, plus crowding data for a given line and optionally a particular direction.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/StopPoint/{id}/Crowding/{line}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StopPointCrowdingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesStopPoint]])
                res.tfl_api_presentation_entities_stop_points = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesStopPoint]])
                res.tfl_api_presentation_entities_stop_points = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def stop_point_direction(self, request: operations.StopPointDirectionRequest) -> operations.StopPointDirectionResponse:
        r"""Returns the canonical direction, \"inbound\" or \"outbound\", for a given pair of stop point Ids in the direction from -&gt; to.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/StopPoint/{id}/DirectionTo/{toStopPointId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StopPointDirectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.stop_point_direction_200_application_json_string = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.stop_point_direction_200_application_xml_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.stop_point_direction_200_text_json_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.stop_point_direction_200_text_xml_string = r.content

        return res

    
    def stop_point_disruption(self, request: operations.StopPointDisruptionRequest) -> operations.StopPointDisruptionResponse:
        r"""Gets all disruptions for the specified StopPointId, plus disruptions for any child Naptan records it may have.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/StopPoint/{ids}/Disruption", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StopPointDisruptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesDisruptedPoint]])
                res.tfl_api_presentation_entities_disrupted_points = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesDisruptedPoint]])
                res.tfl_api_presentation_entities_disrupted_points = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def stop_point_disruption_by_mode(self, request: operations.StopPointDisruptionByModeRequest) -> operations.StopPointDisruptionByModeResponse:
        r"""Gets a distinct list of disrupted stop points for the given modes
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/StopPoint/Mode/{modes}/Disruption", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StopPointDisruptionByModeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesDisruptedPoint]])
                res.tfl_api_presentation_entities_disrupted_points = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesDisruptedPoint]])
                res.tfl_api_presentation_entities_disrupted_points = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def stop_point_get(self, request: operations.StopPointGetRequest) -> operations.StopPointGetResponse:
        r"""Gets a list of StopPoints corresponding to the given list of stop ids.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/StopPoint/{ids}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StopPointGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesStopPoint]])
                res.tfl_api_presentation_entities_stop_points = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesStopPoint]])
                res.tfl_api_presentation_entities_stop_points = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def stop_point_get_by_geo_point(self, request: operations.StopPointGetByGeoPointRequest) -> operations.StopPointGetByGeoPointResponse:
        r"""Gets a list of StopPoints within {radius} by the specified criteria
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/StopPoint"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StopPointGetByGeoPointResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesStopPointsResponse])
                res.tfl_api_presentation_entities_stop_points_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesStopPointsResponse])
                res.tfl_api_presentation_entities_stop_points_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def stop_point_get_by_mode(self, request: operations.StopPointGetByModeRequest) -> operations.StopPointGetByModeResponse:
        r"""Gets a list of StopPoints filtered by the modes available at that StopPoint.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/StopPoint/Mode/{modes}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StopPointGetByModeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesStopPointsResponse])
                res.tfl_api_presentation_entities_stop_points_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesStopPointsResponse])
                res.tfl_api_presentation_entities_stop_points_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def stop_point_get_by_sms(self, request: operations.StopPointGetBySmsRequest) -> operations.StopPointGetBySmsResponse:
        r"""Gets a StopPoint for a given sms code.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/StopPoint/Sms/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StopPointGetBySmsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def stop_point_get_by_type(self, request: operations.StopPointGetByTypeRequest) -> operations.StopPointGetByTypeResponse:
        r"""Gets all stop points of a given type
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/StopPoint/Type/{types}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StopPointGetByTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesStopPoint]])
                res.tfl_api_presentation_entities_stop_points = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesStopPoint]])
                res.tfl_api_presentation_entities_stop_points = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def stop_point_get_by_type_with_pagination(self, request: operations.StopPointGetByTypeWithPaginationRequest) -> operations.StopPointGetByTypeWithPaginationResponse:
        r"""Gets all the stop points of given type(s) with a page number
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/StopPoint/Type/{types}/page/{page}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StopPointGetByTypeWithPaginationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesStopPoint]])
                res.tfl_api_presentation_entities_stop_points = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesStopPoint]])
                res.tfl_api_presentation_entities_stop_points = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def stop_point_get_car_parks_by_id(self, request: operations.StopPointGetCarParksByIDRequest) -> operations.StopPointGetCarParksByIDResponse:
        r"""Get car parks corresponding to the given stop point id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/StopPoint/{stopPointId}/CarParks", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StopPointGetCarParksByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesPlace]])
                res.tfl_api_presentation_entities_places = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesPlace]])
                res.tfl_api_presentation_entities_places = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def stop_point_get_service_types(self, request: operations.StopPointGetServiceTypesRequest) -> operations.StopPointGetServiceTypesResponse:
        r"""Gets the service types for a given stoppoint
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/StopPoint/ServiceTypes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StopPointGetServiceTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesLineServiceType]])
                res.tfl_api_presentation_entities_line_service_types = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesLineServiceType]])
                res.tfl_api_presentation_entities_line_service_types = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def stop_point_get_taxi_ranks_by_ids(self, request: operations.StopPointGetTaxiRanksByIdsRequest) -> operations.StopPointGetTaxiRanksByIdsResponse:
        r"""Gets a list of taxi ranks corresponding to the given stop point id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/StopPoint/{stopPointId}/TaxiRanks", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StopPointGetTaxiRanksByIdsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesPlace]])
                res.tfl_api_presentation_entities_places = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesPlace]])
                res.tfl_api_presentation_entities_places = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def stop_point_meta_categories(self) -> operations.StopPointMetaCategoriesResponse:
        r"""Gets the list of available StopPoint additional information categories
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/StopPoint/Meta/Categories"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StopPointMetaCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesStopPointCategory]])
                res.tfl_api_presentation_entities_stop_point_categories = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesStopPointCategory]])
                res.tfl_api_presentation_entities_stop_point_categories = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def stop_point_meta_modes(self) -> operations.StopPointMetaModesResponse:
        r"""Gets the list of available StopPoint modes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/StopPoint/Meta/Modes"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StopPointMetaModesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesMode]])
                res.tfl_api_presentation_entities_modes = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesMode]])
                res.tfl_api_presentation_entities_modes = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def stop_point_meta_stop_types(self) -> operations.StopPointMetaStopTypesResponse:
        r"""Gets the list of available StopPoint types
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/StopPoint/Meta/StopTypes"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StopPointMetaStopTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.stop_point_meta_stop_types_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.stop_point_meta_stop_types_200_text_json_strings = out

        return res

    
    def stop_point_reachable_from(self, request: operations.StopPointReachableFromRequest) -> operations.StopPointReachableFromResponse:
        r"""Gets Stopoints that are reachable from a station/line combination.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/StopPoint/{id}/CanReachOnLine/{lineId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StopPointReachableFromResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesStopPoint]])
                res.tfl_api_presentation_entities_stop_points = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesStopPoint]])
                res.tfl_api_presentation_entities_stop_points = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def stop_point_route(self, request: operations.StopPointRouteRequest) -> operations.StopPointRouteResponse:
        r"""Returns the route sections for all the lines that service the given stop point ids
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/StopPoint/{id}/Route", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StopPointRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesStopPointRouteSection]])
                res.tfl_api_presentation_entities_stop_point_route_sections = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesStopPointRouteSection]])
                res.tfl_api_presentation_entities_stop_point_route_sections = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def stop_point_search(self, request: operations.StopPointSearchRequest) -> operations.StopPointSearchResponse:
        r"""Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/StopPoint/Search/{query}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StopPointSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesSearchResponse])
                res.tfl_api_presentation_entities_search_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesSearchResponse])
                res.tfl_api_presentation_entities_search_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def travel_time_get_compare_overlay(self, request: operations.TravelTimeGetCompareOverlayRequest) -> operations.TravelTimeGetCompareOverlayResponse:
        r"""Gets the TravelTime overlay.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/TravelTimes/compareOverlay/{z}/mapcenter/{mapCenterLat}/{mapCenterLon}/pinlocation/{pinLat}/{pinLon}/dimensions/{width}/{height}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TravelTimeGetCompareOverlayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def travel_time_get_overlay(self, request: operations.TravelTimeGetOverlayRequest) -> operations.TravelTimeGetOverlayResponse:
        r"""Gets the TravelTime overlay.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/TravelTimes/overlay/{z}/mapcenter/{mapCenterLat}/{mapCenterLon}/pinlocation/{pinLat}/{pinLon}/dimensions/{width}/{height}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TravelTimeGetOverlayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def vehicle_get(self, request: operations.VehicleGetRequest) -> operations.VehicleGetResponse:
        r"""Gets the predictions for a given list of vehicle Id's.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Vehicle/{ids}/Arrivals", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VehicleGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesPrediction]])
                res.tfl_api_presentation_entities_predictions = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TflAPIPresentationEntitiesPrediction]])
                res.tfl_api_presentation_entities_predictions = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def vehicle_get_emissions_surcharge_compliance(self, request: operations.VehicleGetEmissionsSurchargeComplianceRequest) -> operations.VehicleGetEmissionsSurchargeComplianceResponse:
        r"""Gets the Emissions Surcharge compliance for the Vehicle
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Vehicle/EmissionSurcharge"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VehicleGetEmissionsSurchargeComplianceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesVehicleMatch])
                res.tfl_api_presentation_entities_vehicle_match = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesVehicleMatch])
                res.tfl_api_presentation_entities_vehicle_match = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def vehicle_get_ulez_compliance(self, request: operations.VehicleGetUlezComplianceRequest) -> operations.VehicleGetUlezComplianceResponse:
        r"""Gets the Ulez Surcharge compliance for the Vehicle
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Vehicle/UlezCompliance"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VehicleGetUlezComplianceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesVehicleMatch])
                res.tfl_api_presentation_entities_vehicle_match = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TflAPIPresentationEntitiesVehicleMatch])
                res.tfl_api_presentation_entities_vehicle_match = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    