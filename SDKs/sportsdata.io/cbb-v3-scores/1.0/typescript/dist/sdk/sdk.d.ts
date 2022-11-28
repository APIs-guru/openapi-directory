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
     * areGamesInProgress - Are Games In Progress
     *
     * Returns <code>true</code> if there is at least one game being played at the time of the request or <code>false</code> if there are none.
    **/
    areGamesInProgress(req: operations.AreGamesInProgressRequest, config?: AxiosRequestConfig): Promise<operations.AreGamesInProgressResponse>;
    /**
     * currentSeason - Current Season
    **/
    currentSeason(req: operations.CurrentSeasonRequest, config?: AxiosRequestConfig): Promise<operations.CurrentSeasonResponse>;
    /**
     * gamesByDate - Games by Date
    **/
    gamesByDate(req: operations.GamesByDateRequest, config?: AxiosRequestConfig): Promise<operations.GamesByDateResponse>;
    /**
     * leagueHierarchy - League Hierarchy
    **/
    leagueHierarchy(req: operations.LeagueHierarchyRequest, config?: AxiosRequestConfig): Promise<operations.LeagueHierarchyResponse>;
    /**
     * playerDetailsByActive - Player Details by Active
    **/
    playerDetailsByActive(req: operations.PlayerDetailsByActiveRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByActiveResponse>;
    /**
     * playerDetailsByPlayer - Player Details by Player
    **/
    playerDetailsByPlayer(req: operations.PlayerDetailsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByPlayerResponse>;
    /**
     * playerDetailsByTeam - Player Details by Team
    **/
    playerDetailsByTeam(req: operations.PlayerDetailsByTeamRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByTeamResponse>;
    /**
     * schedules - Schedules
    **/
    schedules(req: operations.SchedulesRequest, config?: AxiosRequestConfig): Promise<operations.SchedulesResponse>;
    /**
     * stadiums - Stadiums
    **/
    stadiums(req: operations.StadiumsRequest, config?: AxiosRequestConfig): Promise<operations.StadiumsResponse>;
    /**
     * teamGameStatsByDate - Team Game Stats by Date
    **/
    teamGameStatsByDate(req: operations.TeamGameStatsByDateRequest, config?: AxiosRequestConfig): Promise<operations.TeamGameStatsByDateResponse>;
    /**
     * teamSchedule - Team Schedule
    **/
    teamSchedule(req: operations.TeamScheduleRequest, config?: AxiosRequestConfig): Promise<operations.TeamScheduleResponse>;
    /**
     * teamSeasonStats - Team Season Stats
    **/
    teamSeasonStats(req: operations.TeamSeasonStatsRequest, config?: AxiosRequestConfig): Promise<operations.TeamSeasonStatsResponse>;
    /**
     * teams - Teams
    **/
    teams(req: operations.TeamsRequest, config?: AxiosRequestConfig): Promise<operations.TeamsResponse>;
    /**
     * tournamentHierarchy - Tournament Hierarchy
    **/
    tournamentHierarchy(req: operations.TournamentHierarchyRequest, config?: AxiosRequestConfig): Promise<operations.TournamentHierarchyResponse>;
}
export {};
