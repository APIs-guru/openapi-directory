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
    BoxScoreByScoreidV(req: operations.BoxScoreByScoreidVRequest, config?: AxiosRequestConfig): Promise<operations.BoxScoreByScoreidVResponse>;
    BoxScoreV(req: operations.BoxScoreVRequest, config?: AxiosRequestConfig): Promise<operations.BoxScoreVResponse>;
    /**
     * This method returns all box scores for a given season and week, but only returns player stats that have changed in the last X minutes. You can also filter by type of player stats to include, such as traditional fantasy players, IDP players or all players.
    **/
    BoxScoresDeltaV(req: operations.BoxScoresDeltaVRequest, config?: AxiosRequestConfig): Promise<operations.BoxScoresDeltaVResponse>;
    /**
     * Gets simulated live box scores of NFL games, covering the Conference Championship games on January 21, 2018.
    **/
    BoxScoresVSimulation(req: operations.BoxScoresVSimulationRequest, config?: AxiosRequestConfig): Promise<operations.BoxScoresVSimulationResponse>;
    /**
     * Get bye weeks for the teams during a specified NFL season.
    **/
    ByeWeeks(req: operations.ByeWeeksRequest, config?: AxiosRequestConfig): Promise<operations.ByeWeeksResponse>;
    DailyFantasyPlayers(req: operations.DailyFantasyPlayersRequest, config?: AxiosRequestConfig): Promise<operations.DailyFantasyPlayersResponse>;
    DailyFantasyScoring(req: operations.DailyFantasyScoringRequest, config?: AxiosRequestConfig): Promise<operations.DailyFantasyScoringResponse>;
    DfsSlatesByDate(req: operations.DfsSlatesByDateRequest, config?: AxiosRequestConfig): Promise<operations.DfsSlatesByDateResponse>;
    DfsSlatesByWeek(req: operations.DfsSlatesByWeekRequest, config?: AxiosRequestConfig): Promise<operations.DfsSlatesByWeekResponse>;
    FantasyDefenseGameStats(req: operations.FantasyDefenseGameStatsRequest, config?: AxiosRequestConfig): Promise<operations.FantasyDefenseGameStatsResponse>;
    FantasyDefenseGameStatsByTeam(req: operations.FantasyDefenseGameStatsByTeamRequest, config?: AxiosRequestConfig): Promise<operations.FantasyDefenseGameStatsByTeamResponse>;
    FantasyDefenseSeasonStats(req: operations.FantasyDefenseSeasonStatsRequest, config?: AxiosRequestConfig): Promise<operations.FantasyDefenseSeasonStatsResponse>;
    FantasyDefenseSeasonStatsByTeam(req: operations.FantasyDefenseSeasonStatsByTeamRequest, config?: AxiosRequestConfig): Promise<operations.FantasyDefenseSeasonStatsByTeamResponse>;
    FantasyPlayerOwnershipPercentagesSeasonLong(req: operations.FantasyPlayerOwnershipPercentagesSeasonLongRequest, config?: AxiosRequestConfig): Promise<operations.FantasyPlayerOwnershipPercentagesSeasonLongResponse>;
    /**
     * This method returns a comprehensive list of draftable fantasy football players, including QB, RB, WR, TE, K and DEF.  Players are sorted by ADP (AverageDraftPosition).
    **/
    FantasyPlayersWithAdp(req: operations.FantasyPlayersWithAdpRequest, config?: AxiosRequestConfig): Promise<operations.FantasyPlayersWithAdpResponse>;
    /**
     * Game stats for a specified season.
    **/
    GameStatsBySeasonDeprecatedUseTeamGameStatsInstead(req: operations.GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadRequest, config?: AxiosRequestConfig): Promise<operations.GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadResponse>;
    /**
     * Game stats for a specified season and week.
    **/
    GameStatsByWeekDeprecatedUseTeamGameStatsInstead(req: operations.GameStatsByWeekDeprecatedUseTeamGameStatsInsteadRequest, config?: AxiosRequestConfig): Promise<operations.GameStatsByWeekDeprecatedUseTeamGameStatsInsteadResponse>;
    /**
     * This method returns the top 300+ IDP Fantasy Players for the current or upcoming season, ordered by AverageDraftPositionIDP.
    **/
    IdpFantasyPlayersWithAdp(req: operations.IdpFantasyPlayersWithAdpRequest, config?: AxiosRequestConfig): Promise<operations.IdpFantasyPlayersWithAdpResponse>;
    Injuries(req: operations.InjuriesRequest, config?: AxiosRequestConfig): Promise<operations.InjuriesResponse>;
    InjuriesByTeam(req: operations.InjuriesByTeamRequest, config?: AxiosRequestConfig): Promise<operations.InjuriesByTeamResponse>;
    LeagueLeadersBySeason(req: operations.LeagueLeadersBySeasonRequest, config?: AxiosRequestConfig): Promise<operations.LeagueLeadersBySeasonResponse>;
    LeagueLeadersByWeek(req: operations.LeagueLeadersByWeekRequest, config?: AxiosRequestConfig): Promise<operations.LeagueLeadersByWeekResponse>;
    LegacyBoxScore(req: operations.LegacyBoxScoreRequest, config?: AxiosRequestConfig): Promise<operations.LegacyBoxScoreResponse>;
    /**
     * This method returns all box scores for a given season and week.
    **/
    LegacyBoxScores(req: operations.LegacyBoxScoresRequest, config?: AxiosRequestConfig): Promise<operations.LegacyBoxScoresResponse>;
    /**
     * This method returns box scores for all games that are either in-progress or have been updated within the last 30 minutes.
    **/
    LegacyBoxScoresActive(req: operations.LegacyBoxScoresActiveRequest, config?: AxiosRequestConfig): Promise<operations.LegacyBoxScoresActiveResponse>;
    /**
     * This method returns all box scores for a given season and week, but only returns player stats that have changed in the last X minutes.
    **/
    LegacyBoxScoresDelta(req: operations.LegacyBoxScoresDeltaRequest, config?: AxiosRequestConfig): Promise<operations.LegacyBoxScoresDeltaResponse>;
    LegacyBoxScoresDeltaCurrentWeek(req: operations.LegacyBoxScoresDeltaCurrentWeekRequest, config?: AxiosRequestConfig): Promise<operations.LegacyBoxScoresDeltaCurrentWeekResponse>;
    LegacyBoxScoresFinal(req: operations.LegacyBoxScoresFinalRequest, config?: AxiosRequestConfig): Promise<operations.LegacyBoxScoresFinalResponse>;
    LegacyBoxScoresLive(req: operations.LegacyBoxScoresLiveRequest, config?: AxiosRequestConfig): Promise<operations.LegacyBoxScoresLiveResponse>;
    News(req: operations.NewsRequest, config?: AxiosRequestConfig): Promise<operations.NewsResponse>;
    NewsByDate(req: operations.NewsByDateRequest, config?: AxiosRequestConfig): Promise<operations.NewsByDateResponse>;
    NewsByPlayer(req: operations.NewsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.NewsByPlayerResponse>;
    NewsByTeam(req: operations.NewsByTeamRequest, config?: AxiosRequestConfig): Promise<operations.NewsByTeamResponse>;
    PlayerDetailsByAvailable(req: operations.PlayerDetailsByAvailableRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByAvailableResponse>;
    PlayerDetailsByFreeAgents(req: operations.PlayerDetailsByFreeAgentsRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByFreeAgentsResponse>;
    PlayerDetailsByPlayer(req: operations.PlayerDetailsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByPlayerResponse>;
    PlayerDetailsByRookieDraftYear(req: operations.PlayerDetailsByRookieDraftYearRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByRookieDraftYearResponse>;
    PlayerDetailsByTeam(req: operations.PlayerDetailsByTeamRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByTeamResponse>;
    PlayerGameLogsBySeason(req: operations.PlayerGameLogsBySeasonRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameLogsBySeasonResponse>;
    PlayerGameRedZoneStats(req: operations.PlayerGameRedZoneStatsRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameRedZoneStatsResponse>;
    PlayerGameRedZoneStatsInsideFive(req: operations.PlayerGameRedZoneStatsInsideFiveRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameRedZoneStatsInsideFiveResponse>;
    PlayerGameRedZoneStatsInsideTen(req: operations.PlayerGameRedZoneStatsInsideTenRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameRedZoneStatsInsideTenResponse>;
    PlayerGameStatsByPlayer(req: operations.PlayerGameStatsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameStatsByPlayerResponse>;
    PlayerGameStatsByTeam(req: operations.PlayerGameStatsByTeamRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameStatsByTeamResponse>;
    PlayerGameStatsByWeek(req: operations.PlayerGameStatsByWeekRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameStatsByWeekResponse>;
    PlayerGameStatsByWeekDelta(req: operations.PlayerGameStatsByWeekDeltaRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameStatsByWeekDeltaResponse>;
    PlayerGameStatsDelta(req: operations.PlayerGameStatsDeltaRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameStatsDeltaResponse>;
    PlayerSeasonRedZoneStats(req: operations.PlayerSeasonRedZoneStatsRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonRedZoneStatsResponse>;
    PlayerSeasonRedZoneStatsInsideFive(req: operations.PlayerSeasonRedZoneStatsInsideFiveRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonRedZoneStatsInsideFiveResponse>;
    PlayerSeasonRedZoneStatsInsideTen(req: operations.PlayerSeasonRedZoneStatsInsideTenRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonRedZoneStatsInsideTenResponse>;
    PlayerSeasonStats(req: operations.PlayerSeasonStatsRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonStatsResponse>;
    PlayerSeasonStatsByPlayer(req: operations.PlayerSeasonStatsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonStatsByPlayerResponse>;
    PlayerSeasonStatsByTeam(req: operations.PlayerSeasonStatsByTeamRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonStatsByTeamResponse>;
    PlayerSeasonThirdDownStats(req: operations.PlayerSeasonThirdDownStatsRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonThirdDownStatsResponse>;
    ProBowlers(req: operations.ProBowlersRequest, config?: AxiosRequestConfig): Promise<operations.ProBowlersResponse>;
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
}
export {};
