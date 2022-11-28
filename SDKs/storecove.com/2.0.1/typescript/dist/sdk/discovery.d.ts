import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Discovery {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * discoveryReceives - Disover Network Participant
     *
     * Discover a network participant and capabilities.
    **/
    discoveryReceives(req: operations.DiscoveryReceivesRequest, config?: AxiosRequestConfig): Promise<operations.DiscoveryReceivesResponse>;
}
