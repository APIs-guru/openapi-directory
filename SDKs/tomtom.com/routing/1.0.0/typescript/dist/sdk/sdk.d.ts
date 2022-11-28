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
     * getRoutingVersionNumberCalculateReachableRangeOriginContentType - Reachable Range
     *
     * Calculates a set of locations that can be reached from the origin point.
    **/
    getRoutingVersionNumberCalculateReachableRangeOriginContentType(req: operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse>;
    /**
     * getRoutingVersionNumberCalculateRouteLocationsContentType - Calculate Route
     *
     * Calculates a route between an origin and a destination.
    **/
    getRoutingVersionNumberCalculateRouteLocationsContentType(req: operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse>;
    /**
     * postRoutingVersionNumberCalculateReachableRangeOriginContentType - Reachable Range
     *
     * Calculates a set of locations that can be reached from the origin point. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.
    **/
    postRoutingVersionNumberCalculateReachableRangeOriginContentType(req: operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest, config?: AxiosRequestConfig): Promise<operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse>;
    /**
     * postRoutingVersionNumberCalculateRouteLocationsContentType - Calculate Route
     *
     * Calculates a route between an origin and a destination. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.
    **/
    postRoutingVersionNumberCalculateRouteLocationsContentType(req: operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequest, config?: AxiosRequestConfig): Promise<operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeResponse>;
}
export {};
