import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Infrastructure {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNode - Show node details
     *
     * Get details of infrastructure nodes. Only admin users can get this information. The proxy id is
     * required for adding a data source for selecting appropriate proxy node to add the data source.
    **/
    getNode(req: operations.GetNodeRequest, config?: AxiosRequestConfig): Promise<operations.GetNodeResponse>;
    /**
     * listNodes - List nodes
     *
     * Get list of infrastructure nodes. Only admin users can retrieve this information.
    **/
    listNodes(req: operations.ListNodesRequest, config?: AxiosRequestConfig): Promise<operations.ListNodesResponse>;
}
