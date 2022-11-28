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
     * getSearchVersionNumberAdditionalDataExt - Additional Data
    **/
    getSearchVersionNumberAdditionalDataExt(req: operations.GetSearchVersionNumberAdditionalDataExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberAdditionalDataExtResponse>;
    /**
     * getSearchVersionNumberCSCategoryExt - Low Bandwith Category Search
    **/
    getSearchVersionNumberCSCategoryExt(req: operations.GetSearchVersionNumberCSCategoryExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberCSCategoryExtResponse>;
    /**
     * getSearchVersionNumberCategorySearchQueryExt - Category Search
    **/
    getSearchVersionNumberCategorySearchQueryExt(req: operations.GetSearchVersionNumberCategorySearchQueryExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberCategorySearchQueryExtResponse>;
    /**
     * getSearchVersionNumberGeocodeQueryExt - Geocode
    **/
    getSearchVersionNumberGeocodeQueryExt(req: operations.GetSearchVersionNumberGeocodeQueryExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberGeocodeQueryExtResponse>;
    /**
     * getSearchVersionNumberGeometryFilterExt - Geometry Filter
    **/
    getSearchVersionNumberGeometryFilterExt(req: operations.GetSearchVersionNumberGeometryFilterExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberGeometryFilterExtResponse>;
    /**
     * getSearchVersionNumberGeometrySearchQueryExt - Geometry Search
    **/
    getSearchVersionNumberGeometrySearchQueryExt(req: operations.GetSearchVersionNumberGeometrySearchQueryExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberGeometrySearchQueryExtResponse>;
    /**
     * getSearchVersionNumberNearbySearchExt - Nearby Search
    **/
    getSearchVersionNumberNearbySearchExt(req: operations.GetSearchVersionNumberNearbySearchExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberNearbySearchExtResponse>;
    /**
     * getSearchVersionNumberPoiSearchQueryExt - Points of Interest Search
    **/
    getSearchVersionNumberPoiSearchQueryExt(req: operations.GetSearchVersionNumberPoiSearchQueryExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberPoiSearchQueryExtResponse>;
    /**
     * getSearchVersionNumberReverseGeocodeCrossStreetPositionExt - Cross Street lookup
    **/
    getSearchVersionNumberReverseGeocodeCrossStreetPositionExt(req: operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtResponse>;
    /**
     * getSearchVersionNumberReverseGeocodePositionExt - Reverse Geocode
    **/
    getSearchVersionNumberReverseGeocodePositionExt(req: operations.GetSearchVersionNumberReverseGeocodePositionExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberReverseGeocodePositionExtResponse>;
    /**
     * getSearchVersionNumberRoutedFilterPositionHeadingExt - Routed Filter
    **/
    getSearchVersionNumberRoutedFilterPositionHeadingExt(req: operations.GetSearchVersionNumberRoutedFilterPositionHeadingExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberRoutedFilterPositionHeadingExtResponse>;
    /**
     * getSearchVersionNumberRoutedSearchQueryPositionHeadingExt - Routed Search
    **/
    getSearchVersionNumberRoutedSearchQueryPositionHeadingExt(req: operations.GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtResponse>;
    /**
     * getSearchVersionNumberSQueryExt - Low bandwith Search
    **/
    getSearchVersionNumberSQueryExt(req: operations.GetSearchVersionNumberSQueryExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberSQueryExtResponse>;
    /**
     * getSearchVersionNumberSearchQueryExt - Fuzzy Search
    **/
    getSearchVersionNumberSearchQueryExt(req: operations.GetSearchVersionNumberSearchQueryExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberSearchQueryExtResponse>;
    /**
     * getSearchVersionNumberStructuredGeocodeExt - Structured Geocode
    **/
    getSearchVersionNumberStructuredGeocodeExt(req: operations.GetSearchVersionNumberStructuredGeocodeExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberStructuredGeocodeExtResponse>;
    /**
     * postSearchVersionNumberGeometryFilterExt - Geometry Filter
    **/
    postSearchVersionNumberGeometryFilterExt(req: operations.PostSearchVersionNumberGeometryFilterExtRequest, config?: AxiosRequestConfig): Promise<operations.PostSearchVersionNumberGeometryFilterExtResponse>;
    /**
     * postSearchVersionNumberGeometrySearchQueryExt - Geometry Search
    **/
    postSearchVersionNumberGeometrySearchQueryExt(req: operations.PostSearchVersionNumberGeometrySearchQueryExtRequest, config?: AxiosRequestConfig): Promise<operations.PostSearchVersionNumberGeometrySearchQueryExtResponse>;
    /**
     * postSearchVersionNumberRoutedFilterPositionHeadingExt - Routed Filter
    **/
    postSearchVersionNumberRoutedFilterPositionHeadingExt(req: operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest, config?: AxiosRequestConfig): Promise<operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtResponse>;
    /**
     * postSearchVersionNumberSearchAlongRouteQueryExt - Along Route Search
    **/
    postSearchVersionNumberSearchAlongRouteQueryExt(req: operations.PostSearchVersionNumberSearchAlongRouteQueryExtRequest, config?: AxiosRequestConfig): Promise<operations.PostSearchVersionNumberSearchAlongRouteQueryExtResponse>;
}
export {};
