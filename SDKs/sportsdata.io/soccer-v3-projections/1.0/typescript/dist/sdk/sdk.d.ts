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
     * projectedPlayerGameStatsByCompetitionWDfsSalaries - Projected Player Game Stats by Competition (w/ DFS Salaries)
    **/
    projectedPlayerGameStatsByCompetitionWDfsSalaries(req: operations.ProjectedPlayerGameStatsByCompetitionWDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByCompetitionWDfsSalariesResponse>;
    /**
     * projectedPlayerGameStatsByDateWDfsSalaries - Projected Player Game Stats by Date (w/ DFS Salaries)
    **/
    projectedPlayerGameStatsByDateWDfsSalaries(req: operations.ProjectedPlayerGameStatsByDateWDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByDateWDfsSalariesResponse>;
    /**
     * projectedPlayerGameStatsByPlayerWDfsSalaries - Projected Player Game Stats by Player (w/ DFS Salaries)
    **/
    projectedPlayerGameStatsByPlayerWDfsSalaries(req: operations.ProjectedPlayerGameStatsByPlayerWDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByPlayerWDfsSalariesResponse>;
    /**
     * upcomingDfsSlatesByCompetition - Upcoming Dfs Slates By Competition
    **/
    upcomingDfsSlatesByCompetition(req: operations.UpcomingDfsSlatesByCompetitionRequest, config?: AxiosRequestConfig): Promise<operations.UpcomingDfsSlatesByCompetitionResponse>;
}
export {};
