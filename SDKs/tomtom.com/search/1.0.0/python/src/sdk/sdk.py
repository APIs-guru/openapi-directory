

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
        
    
    
    
    def get_search_version_number_additional_data_ext_(self, request: operations.GetSearchVersionNumberAdditionalDataExtRequest) -> operations.GetSearchVersionNumberAdditionalDataExtResponse:
        r"""Additional Data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/additionalData.{ext}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchVersionNumberAdditionalDataExtResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_search_version_number_c_s_category_ext_(self, request: operations.GetSearchVersionNumberCSCategoryExtRequest) -> operations.GetSearchVersionNumberCSCategoryExtResponse:
        r"""Low Bandwith Category Search
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/cS/{category}.{ext}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchVersionNumberCSCategoryExtResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 596:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def get_search_version_number_category_search_query_ext_(self, request: operations.GetSearchVersionNumberCategorySearchQueryExtRequest) -> operations.GetSearchVersionNumberCategorySearchQueryExtResponse:
        r"""Category Search
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/categorySearch/{query}.{ext}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchVersionNumberCategorySearchQueryExtResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 596:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def get_search_version_number_geocode_query_ext_(self, request: operations.GetSearchVersionNumberGeocodeQueryExtRequest) -> operations.GetSearchVersionNumberGeocodeQueryExtResponse:
        r"""Geocode
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/geocode/{query}.{ext}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchVersionNumberGeocodeQueryExtResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 596:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def get_search_version_number_geometry_filter_ext_(self, request: operations.GetSearchVersionNumberGeometryFilterExtRequest) -> operations.GetSearchVersionNumberGeometryFilterExtResponse:
        r"""Geometry Filter
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/geometryFilter.{ext}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchVersionNumberGeometryFilterExtResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 596:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def get_search_version_number_geometry_search_query_ext_(self, request: operations.GetSearchVersionNumberGeometrySearchQueryExtRequest) -> operations.GetSearchVersionNumberGeometrySearchQueryExtResponse:
        r"""Geometry Search
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/geometrySearch/{query}.{ext}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchVersionNumberGeometrySearchQueryExtResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 596:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def get_search_version_number_nearby_search_ext_(self, request: operations.GetSearchVersionNumberNearbySearchExtRequest) -> operations.GetSearchVersionNumberNearbySearchExtResponse:
        r"""Nearby Search
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/nearbySearch/.{ext}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchVersionNumberNearbySearchExtResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 596:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def get_search_version_number_poi_search_query_ext_(self, request: operations.GetSearchVersionNumberPoiSearchQueryExtRequest) -> operations.GetSearchVersionNumberPoiSearchQueryExtResponse:
        r"""Points of Interest Search
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/poiSearch/{query}.{ext}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchVersionNumberPoiSearchQueryExtResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 596:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def get_search_version_number_reverse_geocode_cross_street_position_ext_(self, request: operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest) -> operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtResponse:
        r"""Cross Street lookup
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/reverseGeocode/crossStreet/{position}.{ext}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 596:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def get_search_version_number_reverse_geocode_position_ext_(self, request: operations.GetSearchVersionNumberReverseGeocodePositionExtRequest) -> operations.GetSearchVersionNumberReverseGeocodePositionExtResponse:
        r"""Reverse Geocode
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/reverseGeocode/{position}.{ext}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchVersionNumberReverseGeocodePositionExtResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 596:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def get_search_version_number_routed_filter_position_heading_ext_(self, request: operations.GetSearchVersionNumberRoutedFilterPositionHeadingExtRequest) -> operations.GetSearchVersionNumberRoutedFilterPositionHeadingExtResponse:
        r"""Routed Filter
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/routedFilter/{position}/{heading}.{ext}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchVersionNumberRoutedFilterPositionHeadingExtResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 596:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def get_search_version_number_routed_search_query_position_heading_ext_(self, request: operations.GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtRequest) -> operations.GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtResponse:
        r"""Routed Search
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/routedSearch/{query}/{position}/{heading}.{ext}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 596:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def get_search_version_number_s_query_ext_(self, request: operations.GetSearchVersionNumberSQueryExtRequest) -> operations.GetSearchVersionNumberSQueryExtResponse:
        r"""Low bandwith Search
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/s/{query}.{ext}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchVersionNumberSQueryExtResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 596:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def get_search_version_number_search_query_ext_(self, request: operations.GetSearchVersionNumberSearchQueryExtRequest) -> operations.GetSearchVersionNumberSearchQueryExtResponse:
        r"""Fuzzy Search
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/search/{query}.{ext}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchVersionNumberSearchQueryExtResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 596:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def get_search_version_number_structured_geocode_ext_(self, request: operations.GetSearchVersionNumberStructuredGeocodeExtRequest) -> operations.GetSearchVersionNumberStructuredGeocodeExtResponse:
        r"""Structured Geocode
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/structuredGeocode.{ext}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchVersionNumberStructuredGeocodeExtResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 596:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def post_search_version_number_geometry_filter_ext_(self, request: operations.PostSearchVersionNumberGeometryFilterExtRequest) -> operations.PostSearchVersionNumberGeometryFilterExtResponse:
        r"""Geometry Filter
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/geometryFilter.{ext}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSearchVersionNumberGeometryFilterExtResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 596:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def post_search_version_number_geometry_search_query_ext_(self, request: operations.PostSearchVersionNumberGeometrySearchQueryExtRequest) -> operations.PostSearchVersionNumberGeometrySearchQueryExtResponse:
        r"""Geometry Search
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/geometrySearch/{query}.{ext}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSearchVersionNumberGeometrySearchQueryExtResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 596:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def post_search_version_number_routed_filter_position_heading_ext_(self, request: operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest) -> operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtResponse:
        r"""Routed Filter
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/routedFilter/{position}/{heading}.{ext}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 596:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def post_search_version_number_search_along_route_query_ext_(self, request: operations.PostSearchVersionNumberSearchAlongRouteQueryExtRequest) -> operations.PostSearchVersionNumberSearchAlongRouteQueryExtResponse:
        r"""Along Route Search
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{versionNumber}/searchAlongRoute/{query}.{ext}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSearchVersionNumberSearchAlongRouteQueryExtResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 596:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    