import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.tomtom.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getMapVersionNumberCopyrightsCaptionFormat - Captions
     *
     * This API returns copyright captions for the map service.
    **/
    getMapVersionNumberCopyrightsCaptionFormat(req: operations.GetMapVersionNumberCopyrightsCaptionFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetMapVersionNumberCopyrightsCaptionFormatResponse>;
    /**
     * getMapVersionNumberCopyrightsFormat - Copyrights whole world
     *
     * The Copyrights API returns copyright information for
     * the Maps API Raster Tile Service in JSON, JSONP, or XML format.
     * This call returns copyright information for the whole world.
    **/
    getMapVersionNumberCopyrightsFormat(req: operations.GetMapVersionNumberCopyrightsFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetMapVersionNumberCopyrightsFormatResponse>;
    /**
     * getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat - Copyrights bounding box
     *
     * The Copyrights API returns copyright information for
     * the Maps API Raster Tile Service in JSON, JSONP, or XML format.
     * This call returns copyright information for a specific bounding box.
    **/
    getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat(req: operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatResponse>;
    /**
     * getMapVersionNumberCopyrightsZoomXYFormat - Copyrights tile
     *
     * The Copyrights API returns copyright information for
     * the Maps API Raster Tile Service in JSON, JSONP, or XML format.
     * This call returns copyright information for the a specific map tile.
    **/
    getMapVersionNumberCopyrightsZoomXYFormat(req: operations.GetMapVersionNumberCopyrightsZoomXYFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetMapVersionNumberCopyrightsZoomXYFormatResponse>;
    /**
     * getMapVersionNumberStaticimage - Static Image
     *
     * The Static Image service renders a rectangular raster image
     * in the style, size, and zoom level specified. The image can be requested
     * using either a center point plus width and height or a bounding box.
    **/
    getMapVersionNumberStaticimage(req: operations.GetMapVersionNumberStaticimageRequest, config?: AxiosRequestConfig): Promise<operations.GetMapVersionNumberStaticimageResponse>;
    /**
     * getMapVersionNumberTileLayerStyleZoomXYFormat - Tile
     *
     * The Maps API Raster Service delivers raster tiles, which are representations of square sections of map data.
    **/
    getMapVersionNumberTileLayerStyleZoomXYFormat(req: operations.GetMapVersionNumberTileLayerStyleZoomXYFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetMapVersionNumberTileLayerStyleZoomXYFormatResponse>;
    /**
     * getMapVersionNumberTileLayerStyleZoomXYPbf - Tile
     *
     * The Maps API Vector Service delivers vector tiles, which are representations of square sections of map data.
    **/
    getMapVersionNumberTileLayerStyleZoomXYPbf(req: operations.GetMapVersionNumberTileLayerStyleZoomXYPbfRequest, config?: AxiosRequestConfig): Promise<operations.GetMapVersionNumberTileLayerStyleZoomXYPbfResponse>;
    /**
     * getMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXml - WMTS
     *
     * The WMTS GetCapabilities call implements version 1.0.0 of
     * the <a href="http://www.opengeospatial.org/standards/wmts">Web Map Tile Service</a>
     * (WMTS) standard. It returns metadata that allows compatible calling systems to construct
     * calls to TomTom's raster map tile service. See the
     * <a href="/maps-api/maps-api-documentation-raster/wmts">documentation</a>
     * for more information on WMTS.
    **/
    getMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXml(req: operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlRequest, config?: AxiosRequestConfig): Promise<operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlResponse>;
    /**
     * getCapabilities - GetCapabilities
     *
     * The GetCapabilities call is part of TomTom's implementation of version 1.1.1
     * the Web Map Service (WMS). It provides descriptions of the other calls
     * that are available in the implementation.
    **/
    getCapabilities(req: operations.GetCapabilitiesRequest, config?: AxiosRequestConfig): Promise<operations.GetCapabilitiesResponse>;
    /**
     * getMap - GetMap
     *
     * The GetMap call implements the Web Map Service 1.1.1 standard
     * to access TomTom raster map tiles. This service is described
     * in the response to the GetCapabilities API call.
    **/
    getMap(req: operations.GetMapRequest, config?: AxiosRequestConfig): Promise<operations.GetMapResponse>;
}
export {};
