import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Requests {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteAdminRequests - Delete all requests in journal
    **/
    deleteAdminRequests(config?: AxiosRequestConfig): Promise<operations.DeleteAdminRequestsResponse>;
    /**
     * deleteAdminRequestsRequestId - Delete request by ID
    **/
    deleteAdminRequestsRequestId(req: operations.DeleteAdminRequestsRequestIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAdminRequestsRequestIdResponse>;
    /**
     * getAdminRequests - Get all requests in journal
    **/
    getAdminRequests(req: operations.GetAdminRequestsRequest, config?: AxiosRequestConfig): Promise<operations.GetAdminRequestsResponse>;
    /**
     * getAdminRequestsRequestId - Get request by ID
    **/
    getAdminRequestsRequestId(req: operations.GetAdminRequestsRequestIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAdminRequestsRequestIdResponse>;
    /**
     * getAdminRequestsUnmatched - Find unmatched requests
     *
     * Get details of logged requests that weren't matched by any stub mapping
    **/
    getAdminRequestsUnmatched(config?: AxiosRequestConfig): Promise<operations.GetAdminRequestsUnmatchedResponse>;
    /**
     * postAdminRequestsCount - Count requests by criteria
     *
     * Count requests logged in the journal matching the specified criteria
    **/
    postAdminRequestsCount(req: operations.PostAdminRequestsCountRequest, config?: AxiosRequestConfig): Promise<operations.PostAdminRequestsCountResponse>;
    /**
     * postAdminRequestsFind - Find requests by criteria
     *
     * Retrieve details of requests logged in the journal matching the specified criteria
    **/
    postAdminRequestsFind(req: operations.PostAdminRequestsFindRequest, config?: AxiosRequestConfig): Promise<operations.PostAdminRequestsFindResponse>;
    /**
     * postAdminRequestsRemove - Remove requests by criteria
     *
     * Removed requests logged in the journal matching the specified criteria
    **/
    postAdminRequestsRemove(req: operations.PostAdminRequestsRemoveRequest, config?: AxiosRequestConfig): Promise<operations.PostAdminRequestsRemoveResponse>;
    /**
     * postAdminRequestsRemoveByMetadata - Delete requests mappings matching metadata
    **/
    postAdminRequestsRemoveByMetadata(req: operations.PostAdminRequestsRemoveByMetadataRequest, config?: AxiosRequestConfig): Promise<operations.PostAdminRequestsRemoveByMetadataResponse>;
    /**
     * postAdminRequestsReset - Empty the request journal
    **/
    postAdminRequestsReset(config?: AxiosRequestConfig): Promise<operations.PostAdminRequestsResetResponse>;
}
