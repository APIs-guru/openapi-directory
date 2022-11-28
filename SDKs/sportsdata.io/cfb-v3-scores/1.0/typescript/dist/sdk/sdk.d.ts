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
     * conferenceHierarchyWithTeams - Conference Hierarchy (with Teams)
    **/
    conferenceHierarchyWithTeams(req: operations.ConferenceHierarchyWithTeamsRequest, config?: AxiosRequestConfig): Promise<operations.ConferenceHierarchyWithTeamsResponse>;
    /**
     * currentSeason - Current Season
    **/
    currentSeason(req: operations.CurrentSeasonRequest, config?: AxiosRequestConfig): Promise<operations.CurrentSeasonResponse>;
    /**
     * currentSeasonDetails - Current Season Details
    **/
    currentSeasonDetails(req: operations.CurrentSeasonDetailsRequest, config?: AxiosRequestConfig): Promise<operations.CurrentSeasonDetailsResponse>;
    /**
     * currentSeasontype - Current SeasonType
    **/
    currentSeasontype(req: operations.CurrentSeasontypeRequest, config?: AxiosRequestConfig): Promise<operations.CurrentSeasontypeResponse>;
    /**
     * currentWeek - Current Week
    **/
    currentWeek(req: operations.CurrentWeekRequest, config?: AxiosRequestConfig): Promise<operations.CurrentWeekResponse>;
    /**
     * gamesByDate - Games by Date
    **/
    gamesByDate(req: operations.GamesByDateRequest, config?: AxiosRequestConfig): Promise<operations.GamesByDateResponse>;
    /**
     * gamesByWeek - Games by Week
    **/
    gamesByWeek(req: operations.GamesByWeekRequest, config?: AxiosRequestConfig): Promise<operations.GamesByWeekResponse>;
    /**
     * playerDetailsByActive - Player Details By Active
    **/
    playerDetailsByActive(req: operations.PlayerDetailsByActiveRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByActiveResponse>;
    /**
     * playerDetailsByPlayer - Player Details By Player
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
     * teamGameStatsByWeek - Team Game Stats by Week
    **/
    teamGameStatsByWeek(req: operations.TeamGameStatsByWeekRequest, config?: AxiosRequestConfig): Promise<operations.TeamGameStatsByWeekResponse>;
    /**
     * teamSeasonStatsStandings - Team Season Stats & Standings
    **/
    teamSeasonStatsStandings(req: operations.TeamSeasonStatsStandingsRequest, config?: AxiosRequestConfig): Promise<operations.TeamSeasonStatsStandingsResponse>;
    /**
     * teams - Teams
    **/
    teams(req: operations.TeamsRequest, config?: AxiosRequestConfig): Promise<operations.TeamsResponse>;
}
export {};
