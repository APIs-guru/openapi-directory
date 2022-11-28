import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ScaleOutRelay {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * promoteToRelay - Promote a node to relay
     *
     * Promote a node to relay
    **/
    promoteToRelay(req: operations.PromoteToRelayRequest, config?: AxiosRequestConfig): Promise<operations.PromoteToRelayResponse>;
}
