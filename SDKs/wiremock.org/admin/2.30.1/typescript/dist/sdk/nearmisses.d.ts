import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class NearMisses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAdminRequestsUnmatchedNearMisses - Retrieve near-misses for all unmatched requests
    **/
    getAdminRequestsUnmatchedNearMisses(config?: AxiosRequestConfig): Promise<operations.GetAdminRequestsUnmatchedNearMissesResponse>;
    /**
     * postAdminNearMissesRequest - Find near misses matching specific request
     *
     * Find at most 3 near misses for closest stub mappings to the specified request
    **/
    postAdminNearMissesRequest(req: operations.PostAdminNearMissesRequestRequest, config?: AxiosRequestConfig): Promise<operations.PostAdminNearMissesRequestResponse>;
    /**
     * postAdminNearMissesRequestPattern - Find near misses matching request pattern
     *
     * Find at most 3 near misses for closest logged requests to the specified request pattern
    **/
    postAdminNearMissesRequestPattern(req: operations.PostAdminNearMissesRequestPatternRequest, config?: AxiosRequestConfig): Promise<operations.PostAdminNearMissesRequestPatternResponse>;
}
