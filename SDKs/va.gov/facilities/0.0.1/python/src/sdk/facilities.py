import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Facilities:
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

    
    def get_all_facilities(self, request: operations.GetAllFacilitiesRequest) -> operations.GetAllFacilitiesResponse:
        r"""Bulk download information for all facilities
        Retrieve all available facilities in a single operation, formatted as either a GeoJSON FeatureCollection or as a CSV. Due to the complexity of the facility resource type, the CSV response contains a subset of available facility data - specifically it omits the available services, patient satisfaction, and patient wait time data.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/facilities/all"
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllFacilitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/geo+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GeoFacilitiesResponse])
                res.geo_facilities_response = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GeoFacilitiesResponse])
                res.geo_facilities_response = out
            if utils.match_content_type(content_type, "application/vnd.geo+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GeoFacilitiesResponse])
                res.geo_facilities_response = out
            if utils.match_content_type(content_type, "text/csv"):
                res.get_all_facilities_200_text_csv_string = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericError])
                res.generic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericError])
                res.generic_error = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out

        return res

    
    def get_facilities_by_location(self, request: operations.GetFacilitiesByLocationRequest) -> operations.GetFacilitiesByLocationResponse:
        r"""Query facilities by location or IDs, with optional filters
        Query facilities by bounding box, latitude and longitude, state, visn, or zip code. Bounding box is specified as four `bbox[]` parameters, long1, lat1, long2, lat2. (Relative order is unimportant.)
        
        A query by latitude and longitude returns all facilities in the system, sorted by distance from that location.
        
        All location queries support filtering by facility type, available services, and mobile status.
        
        One can also retrieve facilities by ID using a comma-separated list like `?ids=id1,id2`. When requesting multiple facilities by ID, the API will return as many results as it can find matches for, omitting IDs where there is no match. It will not return an HTTP error code if it is unable to match a requested ID. Clients may supply IDs up to the limit their HTTP client enforces for URI path lengths. (Usually 2048 characters.)
        
        Results are paginated. JSON responses include pagination information in the standard JSON API \"links\" and \"meta\" elements. 
        
        ### Parameter combinations
        You may optionally specify `page` and `per_page` with any query. You must specify one of the following parameter combinations: 
        
        - `bbox[]`, with the option of any combination of `type`, `services[]`, or `mobile`
        
        - `ids`
        
        - `lat` and `long`, with the option of any combination of `ids`, `type`, `services[]`, or `mobile`
        
        - `state`, with the option of any combination of `type`, `services[]`, or `mobile`
        
        - `visn`
        
        - `zip`, with the option of any combination of `type`, `services[]`, or `mobile`
        
         Invalid combinations will return `400 Bad Request`.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/facilities"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFacilitiesByLocationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/geo+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GeoFacilitiesResponse])
                res.geo_facilities_response = out
            if utils.match_content_type(content_type, "application/vnd.geo+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GeoFacilitiesResponse])
                res.geo_facilities_response = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FacilitiesResponse])
                res.facilities_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericError])
                res.generic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericError])
                res.generic_error = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out

        return res

    
    def get_facility_by_id(self, request: operations.GetFacilityByIDRequest) -> operations.GetFacilityByIDResponse:
        r"""Retrieve a specific facility by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/facilities/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFacilityByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/geo+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GeoFacilityReadResponse])
                res.geo_facility_read_response = out
            if utils.match_content_type(content_type, "application/vnd.geo+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GeoFacilityReadResponse])
                res.geo_facility_read_response = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FacilityReadResponse])
                res.facility_read_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericError])
                res.generic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericError])
                res.generic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out

        return res

    
    def get_facility_ids(self, request: operations.GetFacilityIdsRequest) -> operations.GetFacilityIdsResponse:
        r"""Bulk download of all facility IDs
        Retrieves all available facility IDs only
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ids"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFacilityIdsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FacilitiesIdsResponse])
                res.facilities_ids_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericError])
                res.generic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericError])
                res.generic_error = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out

        return res

    
    def get_nearby_facilities(self, request: operations.GetNearbyFacilitiesRequest) -> operations.GetNearbyFacilitiesResponse:
        r"""Retrieve all VA health facilities reachable by driving within the specified time period
        Retrieve all VA health facilities that are located within a specified drive time from a specified location based on address (`street_address`, `city`, `state`, and `zip`) or coordinates (`lat` and `lng`). Optional filter parameters include `drive_time` and `services[]`. 
        
        Results of this operation are paginated. Responses include pagination information in the standard JSON API \"links\" and \"meta\" elements. 
        
        The \"attributes\" element has information about the drive-time band that contains the requested location for each facility in the response. The values of `min_time` and `max_time` are in minutes. For example, a facility returned with a matched `min_time` of 10 and `max_time` of 20 is a 10 to 20 minute drive from the requested location.
        
        To retrieve full details for nearby facilities, see the documentation for `/facilities?ids`.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/nearby"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNearbyFacilitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NearbyResponse])
                res.nearby_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericError])
                res.generic_error = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericError])
                res.generic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericError])
                res.generic_error = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out

        return res

    