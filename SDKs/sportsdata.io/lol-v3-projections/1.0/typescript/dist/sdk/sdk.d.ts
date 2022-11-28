import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://api.sportsdata.io", "https://api.sportsdata.io", "http://azure-api.sportsdata.io", "https://azure-api.sportsdata.io"];
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
     * dfsSlatesByDate - Dfs Slates By Date
    **/
    dfsSlatesByDate(req: operations.DfsSlatesByDateRequest, config?: AxiosRequestConfig): Promise<operations.DfsSlatesByDateResponse>;
    /**
     * projectedPlayerGameStatsByDate - Projected Player Game Stats by Date
     *
     * Projected Player Game Stats by Date
    **/
    projectedPlayerGameStatsByDate(req: operations.ProjectedPlayerGameStatsByDateRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByDateResponse>;
    /**
     * projectedPlayerGameStatsByPlayer - Projected Player Game Stats by Player
     *
     * Projected Player Game Stats by Date
    **/
    projectedPlayerGameStatsByPlayer(req: operations.ProjectedPlayerGameStatsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByPlayerResponse>;
}
export {};
