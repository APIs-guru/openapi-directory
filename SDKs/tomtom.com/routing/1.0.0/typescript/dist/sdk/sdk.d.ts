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
     * Calculates a set of locations that can be reached from the origin point.
    **/
    GetRoutingVersionNumberCalculateReachableRangeOriginContentType(req: operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse>;
    /**
     * Calculates a route between an origin and a destination.
    **/
    GetRoutingVersionNumberCalculateRouteLocationsContentType(req: operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse>;
    /**
     * Calculates a set of locations that can be reached from the origin point. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.
    **/
    PostRoutingVersionNumberCalculateReachableRangeOriginContentType(req: operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest, config?: AxiosRequestConfig): Promise<operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse>;
    /**
     * Calculates a route between an origin and a destination. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.
    **/
    PostRoutingVersionNumberCalculateRouteLocationsContentType(req: operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequest, config?: AxiosRequestConfig): Promise<operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeResponse>;
}
export {};
