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
     * dfsSlatesByDate - DFS Slates by Date
    **/
    dfsSlatesByDate(req: operations.DfsSlatesByDateRequest, config?: AxiosRequestConfig): Promise<operations.DfsSlatesByDateResponse>;
    /**
     * projectedPlayerGameStatsByDateWInjuriesLineupsDfsSalaries - Projected Player Game Stats by Date (w/ Injuries, Lineups, DFS Salaries)
    **/
    projectedPlayerGameStatsByDateWInjuriesLineupsDfsSalaries(req: operations.ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesResponse>;
    /**
     * projectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries - Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
    **/
    projectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries(req: operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse>;
    /**
     * projectedPlayerSeasonStatsWithAdp - Projected Player Season Stats (with ADP)
    **/
    projectedPlayerSeasonStatsWithAdp(req: operations.ProjectedPlayerSeasonStatsWithAdpRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerSeasonStatsWithAdpResponse>;
}
export {};
