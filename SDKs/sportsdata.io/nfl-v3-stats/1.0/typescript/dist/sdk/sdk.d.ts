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
     * boxScoreByScoreidV - Box Score by ScoreID V3
    **/
    boxScoreByScoreidV(req: operations.BoxScoreByScoreidVRequest, config?: AxiosRequestConfig): Promise<operations.BoxScoreByScoreidVResponse>;
    /**
     * boxScoreV - Box Score V3
    **/
    boxScoreV(req: operations.BoxScoreVRequest, config?: AxiosRequestConfig): Promise<operations.BoxScoreVResponse>;
    /**
     * boxScoresDeltaV - Box Scores Delta V3
     *
     * This method returns all box scores for a given season and week, but only returns player stats that have changed in the last X minutes. You can also filter by type of player stats to include, such as traditional fantasy players, IDP players or all players.
    **/
    boxScoresDeltaV(req: operations.BoxScoresDeltaVRequest, config?: AxiosRequestConfig): Promise<operations.BoxScoresDeltaVResponse>;
    /**
     * boxScoresVSimulation - Box Scores V3 Simulation
     *
     * Gets simulated live box scores of NFL games, covering the Conference Championship games on January 21, 2018.
    **/
    boxScoresVSimulation(req: operations.BoxScoresVSimulationRequest, config?: AxiosRequestConfig): Promise<operations.BoxScoresVSimulationResponse>;
    /**
     * byeWeeks - Bye Weeks
     *
     * Get bye weeks for the teams during a specified NFL season.
    **/
    byeWeeks(req: operations.ByeWeeksRequest, config?: AxiosRequestConfig): Promise<operations.ByeWeeksResponse>;
    /**
     * dailyFantasyPlayers - Daily Fantasy Players
    **/
    dailyFantasyPlayers(req: operations.DailyFantasyPlayersRequest, config?: AxiosRequestConfig): Promise<operations.DailyFantasyPlayersResponse>;
    /**
     * dailyFantasyScoring - Daily Fantasy Scoring
    **/
    dailyFantasyScoring(req: operations.DailyFantasyScoringRequest, config?: AxiosRequestConfig): Promise<operations.DailyFantasyScoringResponse>;
    /**
     * dfsSlatesByDate - DFS Slates by Date
    **/
    dfsSlatesByDate(req: operations.DfsSlatesByDateRequest, config?: AxiosRequestConfig): Promise<operations.DfsSlatesByDateResponse>;
    /**
     * dfsSlatesByWeek - DFS Slates by Week
    **/
    dfsSlatesByWeek(req: operations.DfsSlatesByWeekRequest, config?: AxiosRequestConfig): Promise<operations.DfsSlatesByWeekResponse>;
    /**
     * fantasyDefenseGameStats - Fantasy Defense Game Stats
    **/
    fantasyDefenseGameStats(req: operations.FantasyDefenseGameStatsRequest, config?: AxiosRequestConfig): Promise<operations.FantasyDefenseGameStatsResponse>;
    /**
     * fantasyDefenseGameStatsByTeam - Fantasy Defense Game Stats by Team
    **/
    fantasyDefenseGameStatsByTeam(req: operations.FantasyDefenseGameStatsByTeamRequest, config?: AxiosRequestConfig): Promise<operations.FantasyDefenseGameStatsByTeamResponse>;
    /**
     * fantasyDefenseSeasonStats - Fantasy Defense Season Stats
    **/
    fantasyDefenseSeasonStats(req: operations.FantasyDefenseSeasonStatsRequest, config?: AxiosRequestConfig): Promise<operations.FantasyDefenseSeasonStatsResponse>;
    /**
     * fantasyDefenseSeasonStatsByTeam - Fantasy Defense Season Stats by Team
    **/
    fantasyDefenseSeasonStatsByTeam(req: operations.FantasyDefenseSeasonStatsByTeamRequest, config?: AxiosRequestConfig): Promise<operations.FantasyDefenseSeasonStatsByTeamResponse>;
    /**
     * fantasyPlayerOwnershipPercentagesSeasonLong - Fantasy Player Ownership Percentages (Season-Long)
    **/
    fantasyPlayerOwnershipPercentagesSeasonLong(req: operations.FantasyPlayerOwnershipPercentagesSeasonLongRequest, config?: AxiosRequestConfig): Promise<operations.FantasyPlayerOwnershipPercentagesSeasonLongResponse>;
    /**
     * fantasyPlayersWithAdp - Fantasy Players with ADP
     *
     * This method returns a comprehensive list of draftable fantasy football players, including QB, RB, WR, TE, K and DEF.  Players are sorted by ADP (AverageDraftPosition).
    **/
    fantasyPlayersWithAdp(req: operations.FantasyPlayersWithAdpRequest, config?: AxiosRequestConfig): Promise<operations.FantasyPlayersWithAdpResponse>;
    /**
     * gameStatsBySeasonDeprecatedUseTeamGameStatsInstead - Game Stats by Season (Deprecated, use Team Game Stats instead)
     *
     * Game stats for a specified season.
    **/
    gameStatsBySeasonDeprecatedUseTeamGameStatsInstead(req: operations.GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadRequest, config?: AxiosRequestConfig): Promise<operations.GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadResponse>;
    /**
     * gameStatsByWeekDeprecatedUseTeamGameStatsInstead - Game Stats by Week (Deprecated, use Team Game Stats instead)
     *
     * Game stats for a specified season and week.
    **/
    gameStatsByWeekDeprecatedUseTeamGameStatsInstead(req: operations.GameStatsByWeekDeprecatedUseTeamGameStatsInsteadRequest, config?: AxiosRequestConfig): Promise<operations.GameStatsByWeekDeprecatedUseTeamGameStatsInsteadResponse>;
    /**
     * idpFantasyPlayersWithAdp - IDP Fantasy Players with ADP
     *
     * This method returns the top 300+ IDP Fantasy Players for the current or upcoming season, ordered by AverageDraftPositionIDP.
    **/
    idpFantasyPlayersWithAdp(req: operations.IdpFantasyPlayersWithAdpRequest, config?: AxiosRequestConfig): Promise<operations.IdpFantasyPlayersWithAdpResponse>;
    /**
     * injuries - Injuries
    **/
    injuries(req: operations.InjuriesRequest, config?: AxiosRequestConfig): Promise<operations.InjuriesResponse>;
    /**
     * injuriesByTeam - Injuries by Team
    **/
    injuriesByTeam(req: operations.InjuriesByTeamRequest, config?: AxiosRequestConfig): Promise<operations.InjuriesByTeamResponse>;
    /**
     * leagueLeadersBySeason - League Leaders by Season
    **/
    leagueLeadersBySeason(req: operations.LeagueLeadersBySeasonRequest, config?: AxiosRequestConfig): Promise<operations.LeagueLeadersBySeasonResponse>;
    /**
     * leagueLeadersByWeek - League Leaders by Week
    **/
    leagueLeadersByWeek(req: operations.LeagueLeadersByWeekRequest, config?: AxiosRequestConfig): Promise<operations.LeagueLeadersByWeekResponse>;
    /**
     * legacyBoxScore - Legacy Box Score
    **/
    legacyBoxScore(req: operations.LegacyBoxScoreRequest, config?: AxiosRequestConfig): Promise<operations.LegacyBoxScoreResponse>;
    /**
     * legacyBoxScores - Legacy Box Scores
     *
     * This method returns all box scores for a given season and week.
    **/
    legacyBoxScores(req: operations.LegacyBoxScoresRequest, config?: AxiosRequestConfig): Promise<operations.LegacyBoxScoresResponse>;
    /**
     * legacyBoxScoresActive - Legacy Box Scores Active
     *
     * This method returns box scores for all games that are either in-progress or have been updated within the last 30 minutes.
    **/
    legacyBoxScoresActive(req: operations.LegacyBoxScoresActiveRequest, config?: AxiosRequestConfig): Promise<operations.LegacyBoxScoresActiveResponse>;
    /**
     * legacyBoxScoresDelta - Legacy Box Scores Delta
     *
     * This method returns all box scores for a given season and week, but only returns player stats that have changed in the last X minutes.
    **/
    legacyBoxScoresDelta(req: operations.LegacyBoxScoresDeltaRequest, config?: AxiosRequestConfig): Promise<operations.LegacyBoxScoresDeltaResponse>;
    /**
     * legacyBoxScoresDeltaCurrentWeek - Legacy Box Scores Delta (Current Week)
    **/
    legacyBoxScoresDeltaCurrentWeek(req: operations.LegacyBoxScoresDeltaCurrentWeekRequest, config?: AxiosRequestConfig): Promise<operations.LegacyBoxScoresDeltaCurrentWeekResponse>;
    /**
     * legacyBoxScoresFinal - Legacy Box Scores Final
    **/
    legacyBoxScoresFinal(req: operations.LegacyBoxScoresFinalRequest, config?: AxiosRequestConfig): Promise<operations.LegacyBoxScoresFinalResponse>;
    /**
     * legacyBoxScoresLive - Legacy Box Scores Live
    **/
    legacyBoxScoresLive(req: operations.LegacyBoxScoresLiveRequest, config?: AxiosRequestConfig): Promise<operations.LegacyBoxScoresLiveResponse>;
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
     * playerGameLogsBySeason - Player Game Logs By Season
    **/
    playerGameLogsBySeason(req: operations.PlayerGameLogsBySeasonRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameLogsBySeasonResponse>;
    /**
     * playerGameRedZoneStats - Player Game Red Zone Stats
    **/
    playerGameRedZoneStats(req: operations.PlayerGameRedZoneStatsRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameRedZoneStatsResponse>;
    /**
     * playerGameRedZoneStatsInsideFive - Player Game Red Zone Stats Inside Five
    **/
    playerGameRedZoneStatsInsideFive(req: operations.PlayerGameRedZoneStatsInsideFiveRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameRedZoneStatsInsideFiveResponse>;
    /**
     * playerGameRedZoneStatsInsideTen - Player Game Red Zone Stats Inside Ten
    **/
    playerGameRedZoneStatsInsideTen(req: operations.PlayerGameRedZoneStatsInsideTenRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameRedZoneStatsInsideTenResponse>;
    /**
     * playerGameStatsByPlayer - Player Game Stats by Player
    **/
    playerGameStatsByPlayer(req: operations.PlayerGameStatsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameStatsByPlayerResponse>;
    /**
     * playerGameStatsByTeam - Player Game Stats by Team
    **/
    playerGameStatsByTeam(req: operations.PlayerGameStatsByTeamRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameStatsByTeamResponse>;
    /**
     * playerGameStatsByWeek - Player Game Stats by Week
    **/
    playerGameStatsByWeek(req: operations.PlayerGameStatsByWeekRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameStatsByWeekResponse>;
    /**
     * playerGameStatsByWeekDelta - Player Game Stats by Week Delta
    **/
    playerGameStatsByWeekDelta(req: operations.PlayerGameStatsByWeekDeltaRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameStatsByWeekDeltaResponse>;
    /**
     * playerGameStatsDelta - Player Game Stats Delta
    **/
    playerGameStatsDelta(req: operations.PlayerGameStatsDeltaRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameStatsDeltaResponse>;
    /**
     * playerSeasonRedZoneStats - Player Season Red Zone Stats
    **/
    playerSeasonRedZoneStats(req: operations.PlayerSeasonRedZoneStatsRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonRedZoneStatsResponse>;
    /**
     * playerSeasonRedZoneStatsInsideFive - Player Season Red Zone Stats Inside Five
    **/
    playerSeasonRedZoneStatsInsideFive(req: operations.PlayerSeasonRedZoneStatsInsideFiveRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonRedZoneStatsInsideFiveResponse>;
    /**
     * playerSeasonRedZoneStatsInsideTen - Player Season Red Zone Stats Inside Ten
    **/
    playerSeasonRedZoneStatsInsideTen(req: operations.PlayerSeasonRedZoneStatsInsideTenRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonRedZoneStatsInsideTenResponse>;
    /**
     * playerSeasonStats - Player Season Stats
    **/
    playerSeasonStats(req: operations.PlayerSeasonStatsRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonStatsResponse>;
    /**
     * playerSeasonStatsByPlayer - Player Season Stats by Player
    **/
    playerSeasonStatsByPlayer(req: operations.PlayerSeasonStatsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonStatsByPlayerResponse>;
    /**
     * playerSeasonStatsByTeam - Player Season Stats by Team
    **/
    playerSeasonStatsByTeam(req: operations.PlayerSeasonStatsByTeamRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonStatsByTeamResponse>;
    /**
     * playerSeasonThirdDownStats - Player Season Third Down Stats
    **/
    playerSeasonThirdDownStats(req: operations.PlayerSeasonThirdDownStatsRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonThirdDownStatsResponse>;
    /**
     * proBowlers - Pro Bowlers
    **/
    proBowlers(req: operations.ProBowlersRequest, config?: AxiosRequestConfig): Promise<operations.ProBowlersResponse>;
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
}
export {};
