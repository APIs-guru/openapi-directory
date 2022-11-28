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
     * byeWeeks - Bye Weeks
     *
     * Get bye weeks for the teams during a specified NFL season.
    **/
    byeWeeks(req: operations.ByeWeeksRequest, config?: AxiosRequestConfig): Promise<operations.ByeWeeksResponse>;
    /**
     * gameStatsBySeasonDeprecatedUseTeamGameStatsInstead - Game Stats by Season (Deprecated, use Team Game Stats instead)
    **/
    gameStatsBySeasonDeprecatedUseTeamGameStatsInstead(req: operations.GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadRequest, config?: AxiosRequestConfig): Promise<operations.GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadResponse>;
    /**
     * gameStatsByWeekDeprecatedUseTeamGameStatsInstead - Game Stats by Week (Deprecated, use Team Game Stats instead)
    **/
    gameStatsByWeekDeprecatedUseTeamGameStatsInstead(req: operations.GameStatsByWeekDeprecatedUseTeamGameStatsInsteadRequest, config?: AxiosRequestConfig): Promise<operations.GameStatsByWeekDeprecatedUseTeamGameStatsInsteadResponse>;
    /**
     * news - News
    **/
    news(req: operations.NewsRequest, config?: AxiosRequestConfig): Promise<operations.NewsResponse>;
    /**
     * newsByDate - News by Date
    **/
    newsByDate(req: operations.NewsByDateRequest, config?: AxiosRequestConfig): Promise<operations.NewsByDateResponse>;
    /**
     * newsByPlayer - News by Player
    **/
    newsByPlayer(req: operations.NewsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.NewsByPlayerResponse>;
    /**
     * newsByTeam - News by Team
    **/
    newsByTeam(req: operations.NewsByTeamRequest, config?: AxiosRequestConfig): Promise<operations.NewsByTeamResponse>;
    /**
     * playerDetailsByAvailable - Player Details by Available
    **/
    playerDetailsByAvailable(req: operations.PlayerDetailsByAvailableRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByAvailableResponse>;
    /**
     * playerDetailsByFreeAgents - Player Details by Free Agents
    **/
    playerDetailsByFreeAgents(req: operations.PlayerDetailsByFreeAgentsRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByFreeAgentsResponse>;
    /**
     * playerDetailsByPlayer - Player Details by Player
    **/
    playerDetailsByPlayer(req: operations.PlayerDetailsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByPlayerResponse>;
    /**
     * playerDetailsByRookieDraftYear - Player Details by Rookie Draft Year
    **/
    playerDetailsByRookieDraftYear(req: operations.PlayerDetailsByRookieDraftYearRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByRookieDraftYearResponse>;
    /**
     * playerDetailsByTeam - Player Details by Team
    **/
    playerDetailsByTeam(req: operations.PlayerDetailsByTeamRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByTeamResponse>;
    /**
     * referees - Referees
     *
     * Returns full list of NFL Referees
    **/
    referees(req: operations.RefereesRequest, config?: AxiosRequestConfig): Promise<operations.RefereesResponse>;
    /**
     * schedule - Schedule
     *
     * Game schedule for a specified season.
    **/
    schedule(req: operations.ScheduleRequest, config?: AxiosRequestConfig): Promise<operations.ScheduleResponse>;
    /**
     * scoresByDate - Scores by Date
     *
     * Get game scores for a specified week of a season.
    **/
    scoresByDate(req: operations.ScoresByDateRequest, config?: AxiosRequestConfig): Promise<operations.ScoresByDateResponse>;
    /**
     * scoresBySeason - Scores by Season
     *
     * Game scores for a specified season.
    **/
    scoresBySeason(req: operations.ScoresBySeasonRequest, config?: AxiosRequestConfig): Promise<operations.ScoresBySeasonResponse>;
    /**
     * scoresByWeek - Scores by Week
     *
     * Get game scores for a specified week of a season.
    **/
    scoresByWeek(req: operations.ScoresByWeekRequest, config?: AxiosRequestConfig): Promise<operations.ScoresByWeekResponse>;
    /**
     * scoresByWeekSimulation - Scores by Week Simulation
     *
     * Gets simulated live scores of NFL games, covering the Conference Championship games on January 21, 2018.
    **/
    scoresByWeekSimulation(req: operations.ScoresByWeekSimulationRequest, config?: AxiosRequestConfig): Promise<operations.ScoresByWeekSimulationResponse>;
    /**
     * seasonCurrent - Season Current
     *
     * Year of the current NFL season. This value changes on July 1st. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.
    **/
    seasonCurrent(req: operations.SeasonCurrentRequest, config?: AxiosRequestConfig): Promise<operations.SeasonCurrentResponse>;
    /**
     * seasonLastCompleted - Season Last Completed
     *
     * Year of the most recently completed season. this value changes immediately after the Super Bowl. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.
    **/
    seasonLastCompleted(req: operations.SeasonLastCompletedRequest, config?: AxiosRequestConfig): Promise<operations.SeasonLastCompletedResponse>;
    /**
     * seasonUpcoming - Season Upcoming
     *
     * Year of the current NFL season, if we are in the mid-season. If we are in the off-season, then year of the next upcoming season. This value changes immediately after the Super Bowl. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.
    **/
    seasonUpcoming(req: operations.SeasonUpcomingRequest, config?: AxiosRequestConfig): Promise<operations.SeasonUpcomingResponse>;
    /**
     * stadiums - Stadiums
     *
     * This method returns all stadiums.
    **/
    stadiums(req: operations.StadiumsRequest, config?: AxiosRequestConfig): Promise<operations.StadiumsResponse>;
    /**
     * standings - Standings
    **/
    standings(req: operations.StandingsRequest, config?: AxiosRequestConfig): Promise<operations.StandingsResponse>;
    /**
     * teamGameStats - Team Game Stats
    **/
    teamGameStats(req: operations.TeamGameStatsRequest, config?: AxiosRequestConfig): Promise<operations.TeamGameStatsResponse>;
    /**
     * teamSeasonStats - Team Season Stats
    **/
    teamSeasonStats(req: operations.TeamSeasonStatsRequest, config?: AxiosRequestConfig): Promise<operations.TeamSeasonStatsResponse>;
    /**
     * teamsActive - Teams (Active)
     *
     * Gets all active teams.
    **/
    teamsActive(req: operations.TeamsActiveRequest, config?: AxiosRequestConfig): Promise<operations.TeamsActiveResponse>;
    /**
     * teamsAll - Teams (All)
     *
     * Gets all teams, including pro bowl teams.
    **/
    teamsAll(req: operations.TeamsAllRequest, config?: AxiosRequestConfig): Promise<operations.TeamsAllResponse>;
    /**
     * teamsBySeason - Teams by Season
     *
     * List of teams playing in a specified season.
    **/
    teamsBySeason(req: operations.TeamsBySeasonRequest, config?: AxiosRequestConfig): Promise<operations.TeamsBySeasonResponse>;
    /**
     * timeframes - Timeframes
     *
     * Get detailed information about past, present, and future timeframes.
    **/
    timeframes(req: operations.TimeframesRequest, config?: AxiosRequestConfig): Promise<operations.TimeframesResponse>;
    /**
     * weekCurrent - Week Current
     *
     * Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.
    **/
    weekCurrent(req: operations.WeekCurrentRequest, config?: AxiosRequestConfig): Promise<operations.WeekCurrentResponse>;
    /**
     * weekLastCompleted - Week Last Completed
     *
     * Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.
    **/
    weekLastCompleted(req: operations.WeekLastCompletedRequest, config?: AxiosRequestConfig): Promise<operations.WeekLastCompletedResponse>;
    /**
     * weekUpcoming - Week Upcoming
     *
     * Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.
    **/
    weekUpcoming(req: operations.WeekUpcomingRequest, config?: AxiosRequestConfig): Promise<operations.WeekUpcomingResponse>;
    /**
     * xPing - X Ping
     *
     * Ping NFL API
    **/
    xPing(req: operations.XPingRequest, config?: AxiosRequestConfig): Promise<operations.XPingResponse>;
}
export {};
