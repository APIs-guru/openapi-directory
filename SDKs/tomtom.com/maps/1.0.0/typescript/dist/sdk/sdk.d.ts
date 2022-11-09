import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * This API returns copyright captions for the map service.
    **/
    GetMapVersionNumberCopyrightsCaptionFormat(req: operations.GetMapVersionNumberCopyrightsCaptionFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetMapVersionNumberCopyrightsCaptionFormatResponse>;
    /**
     * The Copyrights API returns copyright information for
     * the Maps API Raster Tile Service in JSON, JSONP, or XML format.
     * This call returns copyright information for the whole world.
    **/
    GetMapVersionNumberCopyrightsFormat(req: operations.GetMapVersionNumberCopyrightsFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetMapVersionNumberCopyrightsFormatResponse>;
    /**
     * The Copyrights API returns copyright information for
     * the Maps API Raster Tile Service in JSON, JSONP, or XML format.
     * This call returns copyright information for a specific bounding box.
    **/
    GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat(req: operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatResponse>;
    /**
     * The Copyrights API returns copyright information for
     * the Maps API Raster Tile Service in JSON, JSONP, or XML format.
     * This call returns copyright information for the a specific map tile.
    **/
    GetMapVersionNumberCopyrightsZoomXYFormat(req: operations.GetMapVersionNumberCopyrightsZoomXYFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetMapVersionNumberCopyrightsZoomXYFormatResponse>;
    /**
     * The Static Image service renders a rectangular raster image
     * in the style, size, and zoom level specified. The image can be requested
     * using either a center point plus width and height or a bounding box.
    **/
    GetMapVersionNumberStaticimage(req: operations.GetMapVersionNumberStaticimageRequest, config?: AxiosRequestConfig): Promise<operations.GetMapVersionNumberStaticimageResponse>;
    /**
     * The Maps API Raster Service delivers raster tiles, which are representations of square sections of map data.
    **/
    GetMapVersionNumberTileLayerStyleZoomXYFormat(req: operations.GetMapVersionNumberTileLayerStyleZoomXYFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetMapVersionNumberTileLayerStyleZoomXYFormatResponse>;
    /**
     * The Maps API Vector Service delivers vector tiles, which are representations of square sections of map data.
    **/
    GetMapVersionNumberTileLayerStyleZoomXYPbf(req: operations.GetMapVersionNumberTileLayerStyleZoomXYPbfRequest, config?: AxiosRequestConfig): Promise<operations.GetMapVersionNumberTileLayerStyleZoomXYPbfResponse>;
    /**
     * The WMTS GetCapabilities call implements version 1.0.0 of
     * the <a href="http://www.opengeospatial.org/standards/wmts">Web Map Tile Service</a>
     * (WMTS) standard. It returns metadata that allows compatible calling systems to construct
     * calls to TomTom's raster map tile service. See the
     * <a href="/maps-api/maps-api-documentation-raster/wmts">documentation</a>
     * for more information on WMTS.
    **/
    GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXml(req: operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlRequest, config?: AxiosRequestConfig): Promise<operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlResponse>;
    /**
     * The GetCapabilities call is part of TomTom's implementation of version 1.1.1
     * the Web Map Service (WMS). It provides descriptions of the other calls
     * that are available in the implementation.
    **/
    GetCapabilities(req: operations.GetCapabilitiesRequest, config?: AxiosRequestConfig): Promise<operations.GetCapabilitiesResponse>;
    /**
     * The GetMap call implements the Web Map Service 1.1.1 standard
     * to access TomTom raster map tiles. This service is described
     * in the response to the GetCapabilities API call.
    **/
    GetMap(req: operations.GetMapRequest, config?: AxiosRequestConfig): Promise<operations.GetMapResponse>;
}
export {};
