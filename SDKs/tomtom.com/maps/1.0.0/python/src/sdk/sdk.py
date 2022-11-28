

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
        
    
    
    
    def get_map_version_number_copyrights_caption_format_(self, request: operations.GetMapVersionNumberCopyrightsCaptionFormatRequest) -> operations.GetMapVersionNumberCopyrightsCaptionFormatResponse:
        r"""Captions
        This API returns copyright captions for the map service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/map/{versionNumber}/copyrights/caption.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
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
        r"""Copyrights whole world
        The Copyrights API returns copyright information for
        the Maps API Raster Tile Service in JSON, JSONP, or XML format.
        This call returns copyright information for the whole world.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/map/{versionNumber}/copyrights.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
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
        r"""Copyrights bounding box
        The Copyrights API returns copyright information for
        the Maps API Raster Tile Service in JSON, JSONP, or XML format.
        This call returns copyright information for a specific bounding box.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/map/{versionNumber}/copyrights/{minLon}/{minLat}/{maxLon}/{maxLat}.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
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
        r"""Copyrights tile
        The Copyrights API returns copyright information for
        the Maps API Raster Tile Service in JSON, JSONP, or XML format.
        This call returns copyright information for the a specific map tile.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/map/{versionNumber}/copyrights/{zoom}/{X}/{Y}.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
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
        r"""Static Image
        The Static Image service renders a rectangular raster image
        in the style, size, and zoom level specified. The image can be requested
        using either a center point plus width and height or a bounding box.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/map/{versionNumber}/staticimage", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
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
        r"""Tile
        The Maps API Raster Service delivers raster tiles, which are representations of square sections of map data.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/map/{versionNumber}/tile/{layer}/{style}/{zoom}/{X}/{Y}.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
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
        r"""Tile
        The Maps API Vector Service delivers vector tiles, which are representations of square sections of map data.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/map/{versionNumber}/tile/{layer}/{style}/{zoom}/{X}/{Y}.pbf", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
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
        r"""WMTS
        The WMTS GetCapabilities call implements version 1.0.0 of
        the <a href=\"http://www.opengeospatial.org/standards/wmts\">Web Map Tile Service</a>
        (WMTS) standard. It returns metadata that allows compatible calling systems to construct
        calls to TomTom's raster map tile service. See the
        <a href=\"/maps-api/maps-api-documentation-raster/wmts\">documentation</a>
        for more information on WMTS.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/map/{versionNumber}/wmts/{key}/{wmtsVersion}/WMTSCapabilities.xml", request.path_params)
        
        
        client = self._client
        
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
        r"""GetCapabilities
        The GetCapabilities call is part of TomTom's implementation of version 1.1.1
        the Web Map Service (WMS). It provides descriptions of the other calls
        that are available in the implementation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/map/{versionNumber}/wms//", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
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
        r"""GetMap
        The GetMap call implements the Web Map Service 1.1.1 standard
        to access TomTom raster map tiles. This service is described
        in the response to the GetCapabilities API call.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/map/{versionNumber}/wms/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
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

    