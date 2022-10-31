import warnings
import requests
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://api.tomtom.com",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    
    def config_security(self, security: shared.Security):
        self.client = utils.configure_security_client(security)

    
    def get_search_version_number_additional_data_ext_(self, request: operations.GetSearchVersionNumberAdditionalDataExtRequest) -> operations.GetSearchVersionNumberAdditionalDataExtResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/search/{versionNumber}/additionalData.{ext}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/search/{versionNumber}/cS/{category}.{ext}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/search/{versionNumber}/categorySearch/{query}.{ext}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/search/{versionNumber}/geocode/{query}.{ext}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/search/{versionNumber}/geometryFilter.{ext}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/search/{versionNumber}/geometrySearch/{query}.{ext}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/search/{versionNumber}/nearbySearch/.{ext}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/search/{versionNumber}/poiSearch/{query}.{ext}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/search/{versionNumber}/reverseGeocode/crossStreet/{position}.{ext}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/search/{versionNumber}/reverseGeocode/{position}.{ext}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/search/{versionNumber}/routedFilter/{position}/{heading}.{ext}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/search/{versionNumber}/routedSearch/{query}/{position}/{heading}.{ext}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/search/{versionNumber}/s/{query}.{ext}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/search/{versionNumber}/search/{query}.{ext}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/search/{versionNumber}/structuredGeocode.{ext}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/search/{versionNumber}/geometryFilter.{ext}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/search/{versionNumber}/geometrySearch/{query}.{ext}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/search/{versionNumber}/routedFilter/{position}/{heading}.{ext}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/search/{versionNumber}/searchAlongRoute/{query}.{ext}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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

    