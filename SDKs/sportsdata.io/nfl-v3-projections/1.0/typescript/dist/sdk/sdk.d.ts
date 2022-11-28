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
     * dfsSlatesByWeek - DFS Slates by Week
    **/
    dfsSlatesByWeek(req: operations.DfsSlatesByWeekRequest, config?: AxiosRequestConfig): Promise<operations.DfsSlatesByWeekResponse>;
    /**
     * idpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries - IDP Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
    **/
    idpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries(req: operations.IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse>;
    /**
     * idpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries - IDP Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
    **/
    idpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries(req: operations.IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse>;
    /**
     * idpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries - IDP Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
    **/
    idpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries(req: operations.IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse>;
    /**
     * projectedFantasyDefenseGameStatsWDfsSalaries - Projected Fantasy Defense Game Stats (w/ DFS Salaries)
    **/
    projectedFantasyDefenseGameStatsWDfsSalaries(req: operations.ProjectedFantasyDefenseGameStatsWDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedFantasyDefenseGameStatsWDfsSalariesResponse>;
    /**
     * projectedFantasyDefenseSeasonStatsWByeWeekAdp - Projected Fantasy Defense Season Stats (w/ Bye Week, ADP)
    **/
    projectedFantasyDefenseSeasonStatsWByeWeekAdp(req: operations.ProjectedFantasyDefenseSeasonStatsWByeWeekAdpRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedFantasyDefenseSeasonStatsWByeWeekAdpResponse>;
    /**
     * projectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries - Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
    **/
    projectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries(req: operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse>;
    /**
     * projectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries - Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
    **/
    projectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries(req: operations.ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse>;
    /**
     * projectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries - Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
    **/
    projectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries(req: operations.ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse>;
    /**
     * projectedPlayerSeasonStatsByPlayerWByeWeekAdp - Projected Player Season Stats by Player (w/ Bye Week, ADP)
    **/
    projectedPlayerSeasonStatsByPlayerWByeWeekAdp(req: operations.ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpResponse>;
    /**
     * projectedPlayerSeasonStatsByTeamWByeWeekAdp - Projected Player Season Stats by Team (w/ Bye Week, ADP)
    **/
    projectedPlayerSeasonStatsByTeamWByeWeekAdp(req: operations.ProjectedPlayerSeasonStatsByTeamWByeWeekAdpRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerSeasonStatsByTeamWByeWeekAdpResponse>;
    /**
     * projectedPlayerSeasonStatsWByeWeekAdp - Projected Player Season Stats (w/ Bye Week, ADP)
    **/
    projectedPlayerSeasonStatsWByeWeekAdp(req: operations.ProjectedPlayerSeasonStatsWByeWeekAdpRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerSeasonStatsWByeWeekAdpResponse>;
}
export {};
