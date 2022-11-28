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
     * projectedPlayerGameStatsByDateWInjuriesDfsSalaries - Projected Player Game Stats by Date (w/ Injuries, DFS Salaries)
    **/
    projectedPlayerGameStatsByDateWInjuriesDfsSalaries(req: operations.ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesResponse>;
    /**
     * projectedPlayerGameStatsByPlayerWInjuriesDfsSalaries - Projected Player Game Stats by Player (w/ Injuries, DFS Salaries)
    **/
    projectedPlayerGameStatsByPlayerWInjuriesDfsSalaries(req: operations.ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesResponse>;
    /**
     * projectedPlayerSeasonStats - Projected Player Season Stats
    **/
    projectedPlayerSeasonStats(req: operations.ProjectedPlayerSeasonStatsRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerSeasonStatsResponse>;
    /**
     * projectedPlayerSeasonStatsByPlayer - Projected Player Season Stats by Player
    **/
    projectedPlayerSeasonStatsByPlayer(req: operations.ProjectedPlayerSeasonStatsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerSeasonStatsByPlayerResponse>;
    /**
     * projectedPlayerSeasonStatsByTeam - Projected Player Season Stats by Team
    **/
    projectedPlayerSeasonStatsByTeam(req: operations.ProjectedPlayerSeasonStatsByTeamRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerSeasonStatsByTeamResponse>;
}
export {};
