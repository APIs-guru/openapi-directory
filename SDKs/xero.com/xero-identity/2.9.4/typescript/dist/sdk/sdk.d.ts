import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.xero.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * deleteConnection - Deletes a connection for this user (i.e. disconnect a tenant)
     *
     * Override the base server url that include version
    **/
    deleteConnection(req: operations.DeleteConnectionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectionResponse>;
    /**
     * getConnections - Retrieves the connections for this user
     *
     * Override the base server url that include version
    **/
    getConnections(req: operations.GetConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectionsResponse>;
}
export {};
