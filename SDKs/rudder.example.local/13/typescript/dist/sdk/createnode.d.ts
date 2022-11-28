import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CreateNode {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createNodes - Create a new node
     *
     * Create a new node
    **/
    createNodes(req: operations.CreateNodesRequest, config?: AxiosRequestConfig): Promise<operations.CreateNodesResponse>;
}
