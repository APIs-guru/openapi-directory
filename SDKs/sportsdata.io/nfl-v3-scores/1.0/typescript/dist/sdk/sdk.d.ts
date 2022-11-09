import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Returns <code>true</code> if there is at least one game being played at the time of the request or <code>false</code> if there are none.
    **/
    AreGamesInProgress(req: operations.AreGamesInProgressRequest, config?: AxiosRequestConfig): Promise<operations.AreGamesInProgressResponse>;
    /**
     * Get bye weeks for the teams during a specified NFL season.
    **/
    ByeWeeks(req: operations.ByeWeeksRequest, config?: AxiosRequestConfig): Promise<operations.ByeWeeksResponse>;
    GameStatsBySeasonDeprecatedUseTeamGameStatsInstead(req: operations.GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadRequest, config?: AxiosRequestConfig): Promise<operations.GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadResponse>;
    GameStatsByWeekDeprecatedUseTeamGameStatsInstead(req: operations.GameStatsByWeekDeprecatedUseTeamGameStatsInsteadRequest, config?: AxiosRequestConfig): Promise<operations.GameStatsByWeekDeprecatedUseTeamGameStatsInsteadResponse>;
    News(req: operations.NewsRequest, config?: AxiosRequestConfig): Promise<operations.NewsResponse>;
    NewsByDate(req: operations.NewsByDateRequest, config?: AxiosRequestConfig): Promise<operations.NewsByDateResponse>;
    NewsByPlayer(req: operations.NewsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.NewsByPlayerResponse>;
    NewsByTeam(req: operations.NewsByTeamRequest, config?: AxiosRequestConfig): Promise<operations.NewsByTeamResponse>;
    PlayerDetailsByAvailable(req: operations.PlayerDetailsByAvailableRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByAvailableResponse>;
    PlayerDetailsByFreeAgents(req: operations.PlayerDetailsByFreeAgentsRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByFreeAgentsResponse>;
    PlayerDetailsByPlayer(req: operations.PlayerDetailsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByPlayerResponse>;
    PlayerDetailsByRookieDraftYear(req: operations.PlayerDetailsByRookieDraftYearRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByRookieDraftYearResponse>;
    PlayerDetailsByTeam(req: operations.PlayerDetailsByTeamRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByTeamResponse>;
    /**
     * Returns full list of NFL Referees
    **/
    Referees(req: operations.RefereesRequest, config?: AxiosRequestConfig): Promise<operations.RefereesResponse>;
    /**
     * Game schedule for a specified season.
    **/
    Schedule(req: operations.ScheduleRequest, config?: AxiosRequestConfig): Promise<operations.ScheduleResponse>;
    /**
     * Get game scores for a specified week of a season.
    **/
    ScoresByDate(req: operations.ScoresByDateRequest, config?: AxiosRequestConfig): Promise<operations.ScoresByDateResponse>;
    /**
     * Game scores for a specified season.
    **/
    ScoresBySeason(req: operations.ScoresBySeasonRequest, config?: AxiosRequestConfig): Promise<operations.ScoresBySeasonResponse>;
    /**
     * Get game scores for a specified week of a season.
    **/
    ScoresByWeek(req: operations.ScoresByWeekRequest, config?: AxiosRequestConfig): Promise<operations.ScoresByWeekResponse>;
    /**
     * Gets simulated live scores of NFL games, covering the Conference Championship games on January 21, 2018.
    **/
    ScoresByWeekSimulation(req: operations.ScoresByWeekSimulationRequest, config?: AxiosRequestConfig): Promise<operations.ScoresByWeekSimulationResponse>;
    /**
     * Year of the current NFL season. This value changes on July 1st. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.
    **/
    SeasonCurrent(req: operations.SeasonCurrentRequest, config?: AxiosRequestConfig): Promise<operations.SeasonCurrentResponse>;
    /**
     * Year of the most recently completed season. this value changes immediately after the Super Bowl. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.
    **/
    SeasonLastCompleted(req: operations.SeasonLastCompletedRequest, config?: AxiosRequestConfig): Promise<operations.SeasonLastCompletedResponse>;
    /**
     * Year of the current NFL season, if we are in the mid-season. If we are in the off-season, then year of the next upcoming season. This value changes immediately after the Super Bowl. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.
    **/
    SeasonUpcoming(req: operations.SeasonUpcomingRequest, config?: AxiosRequestConfig): Promise<operations.SeasonUpcomingResponse>;
    /**
     * This method returns all stadiums.
    **/
    Stadiums(req: operations.StadiumsRequest, config?: AxiosRequestConfig): Promise<operations.StadiumsResponse>;
    Standings(req: operations.StandingsRequest, config?: AxiosRequestConfig): Promise<operations.StandingsResponse>;
    TeamGameStats(req: operations.TeamGameStatsRequest, config?: AxiosRequestConfig): Promise<operations.TeamGameStatsResponse>;
    TeamSeasonStats(req: operations.TeamSeasonStatsRequest, config?: AxiosRequestConfig): Promise<operations.TeamSeasonStatsResponse>;
    /**
     * Gets all active teams.
    **/
    TeamsActive(req: operations.TeamsActiveRequest, config?: AxiosRequestConfig): Promise<operations.TeamsActiveResponse>;
    /**
     * Gets all teams, including pro bowl teams.
    **/
    TeamsAll(req: operations.TeamsAllRequest, config?: AxiosRequestConfig): Promise<operations.TeamsAllResponse>;
    /**
     * List of teams playing in a specified season.
    **/
    TeamsBySeason(req: operations.TeamsBySeasonRequest, config?: AxiosRequestConfig): Promise<operations.TeamsBySeasonResponse>;
    /**
     * Get detailed information about past, present, and future timeframes.
    **/
    Timeframes(req: operations.TimeframesRequest, config?: AxiosRequestConfig): Promise<operations.TimeframesResponse>;
    /**
     * Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.
    **/
    WeekCurrent(req: operations.WeekCurrentRequest, config?: AxiosRequestConfig): Promise<operations.WeekCurrentResponse>;
    /**
     * Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.
    **/
    WeekLastCompleted(req: operations.WeekLastCompletedRequest, config?: AxiosRequestConfig): Promise<operations.WeekLastCompletedResponse>;
    /**
     * Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.
    **/
    WeekUpcoming(req: operations.WeekUpcomingRequest, config?: AxiosRequestConfig): Promise<operations.WeekUpcomingResponse>;
    /**
     * Ping NFL API
    **/
    XPing(req: operations.XPingRequest, config?: AxiosRequestConfig): Promise<operations.XPingResponse>;
}
export {};
