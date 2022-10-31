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

    
    def get_map_version_number_copyrights_caption_format_(self, request: operations.GetMapVersionNumberCopyrightsCaptionFormatRequest) -> operations.GetMapVersionNumberCopyrightsCaptionFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/map/{versionNumber}/copyrights/caption.{format}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMapVersionNumberCopyrightsCaptionFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 410:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_map_version_number_copyrights_format_(self, request: operations.GetMapVersionNumberCopyrightsFormatRequest) -> operations.GetMapVersionNumberCopyrightsFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/map/{versionNumber}/copyrights.{format}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMapVersionNumberCopyrightsFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 410:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_map_version_number_copyrights_min_lon_min_lat_max_lon_max_lat_format_(self, request: operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRequest) -> operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/map/{versionNumber}/copyrights/{minLon}/{minLat}/{maxLon}/{maxLat}.{format}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 410:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_map_version_number_copyrights_zoom_x_y_format_(self, request: operations.GetMapVersionNumberCopyrightsZoomXYFormatRequest) -> operations.GetMapVersionNumberCopyrightsZoomXYFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/map/{versionNumber}/copyrights/{zoom}/{X}/{Y}.{format}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMapVersionNumberCopyrightsZoomXYFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 410:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_map_version_number_staticimage(self, request: operations.GetMapVersionNumberStaticimageRequest) -> operations.GetMapVersionNumberStaticimageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/map/{versionNumber}/staticimage", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMapVersionNumberStaticimageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_map_version_number_tile_layer_style_zoom_x_y_format_(self, request: operations.GetMapVersionNumberTileLayerStyleZoomXYFormatRequest) -> operations.GetMapVersionNumberTileLayerStyleZoomXYFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/map/{versionNumber}/tile/{layer}/{style}/{zoom}/{X}/{Y}.{format}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMapVersionNumberTileLayerStyleZoomXYFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 302:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 410:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_map_version_number_tile_layer_style_zoom_x_y_pbf(self, request: operations.GetMapVersionNumberTileLayerStyleZoomXYPbfRequest) -> operations.GetMapVersionNumberTileLayerStyleZoomXYPbfResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/map/{versionNumber}/tile/{layer}/{style}/{zoom}/{X}/{Y}.pbf", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMapVersionNumberTileLayerStyleZoomXYPbfResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_map_version_number_wmts_key_wmts_version_wmts_capabilities_xml(self, request: operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLRequest) -> operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/map/{versionNumber}/wmts/{key}/{wmtsVersion}/WMTSCapabilities.xml", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_capabilities(self, request: operations.GetCapabilitiesRequest) -> operations.GetCapabilitiesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/map/{versionNumber}/wms//", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCapabilitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 202:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_map(self, request: operations.GetMapRequest) -> operations.GetMapResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/map/{versionNumber}/wms/", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMapResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 202:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    