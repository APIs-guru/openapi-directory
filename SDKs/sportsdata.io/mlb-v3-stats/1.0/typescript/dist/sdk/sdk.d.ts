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
     * batterVsPitcherStats - Batter vs. Pitcher Stats
    **/
    batterVsPitcherStats(req: operations.BatterVsPitcherStatsRequest, config?: AxiosRequestConfig): Promise<operations.BatterVsPitcherStatsResponse>;
    /**
     * boxScore - Box Score
    **/
    boxScore(req: operations.BoxScoreRequest, config?: AxiosRequestConfig): Promise<operations.BoxScoreResponse>;
    /**
     * boxScoresByDate - Box Scores by Date
    **/
    boxScoresByDate(req: operations.BoxScoresByDateRequest, config?: AxiosRequestConfig): Promise<operations.BoxScoresByDateResponse>;
    /**
     * boxScoresByDateDelta - Box Scores by Date Delta
    **/
    boxScoresByDateDelta(req: operations.BoxScoresByDateDeltaRequest, config?: AxiosRequestConfig): Promise<operations.BoxScoresByDateDeltaResponse>;
    /**
     * currentSeason - Current Season
    **/
    currentSeason(req: operations.CurrentSeasonRequest, config?: AxiosRequestConfig): Promise<operations.CurrentSeasonResponse>;
    /**
     * dfsSlatesByDate - DFS Slates by Date
    **/
    dfsSlatesByDate(req: operations.DfsSlatesByDateRequest, config?: AxiosRequestConfig): Promise<operations.DfsSlatesByDateResponse>;
    /**
     * gamesByDate - Games by Date
    **/
    gamesByDate(req: operations.GamesByDateRequest, config?: AxiosRequestConfig): Promise<operations.GamesByDateResponse>;
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
     * playerDetailsByActive - Player Details by Active
    **/
    playerDetailsByActive(req: operations.PlayerDetailsByActiveRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByActiveResponse>;
    /**
     * playerDetailsByFreeAgents - Player Details by Free Agents
    **/
    playerDetailsByFreeAgents(req: operations.PlayerDetailsByFreeAgentsRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByFreeAgentsResponse>;
    /**
     * playerDetailsByPlayer - Player Details by Player
    **/
    playerDetailsByPlayer(req: operations.PlayerDetailsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByPlayerResponse>;
    /**
     * playerGameLogsBySeason - Player Game Logs By Season
    **/
    playerGameLogsBySeason(req: operations.PlayerGameLogsBySeasonRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameLogsBySeasonResponse>;
    /**
     * playerGameStatsByDate - Player Game Stats by Date
    **/
    playerGameStatsByDate(req: operations.PlayerGameStatsByDateRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameStatsByDateResponse>;
    /**
     * playerGameStatsByPlayer - Player Game Stats by Player
    **/
    playerGameStatsByPlayer(req: operations.PlayerGameStatsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameStatsByPlayerResponse>;
    /**
     * playerSeasonAwayStats - Player Season Away Stats
    **/
    playerSeasonAwayStats(req: operations.PlayerSeasonAwayStatsRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonAwayStatsResponse>;
    /**
     * playerSeasonHomeStats - Player Season Home Stats
    **/
    playerSeasonHomeStats(req: operations.PlayerSeasonHomeStatsRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonHomeStatsResponse>;
    /**
     * playerSeasonSplitStats - Player Season Split Stats
    **/
    playerSeasonSplitStats(req: operations.PlayerSeasonSplitStatsRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonSplitStatsResponse>;
    /**
     * playerSeasonStats - Player Season Stats
    **/
    playerSeasonStats(req: operations.PlayerSeasonStatsRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonStatsResponse>;
    /**
     * playerSeasonStatsByPlayer - Player Season Stats By Player
    **/
    playerSeasonStatsByPlayer(req: operations.PlayerSeasonStatsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonStatsByPlayerResponse>;
    /**
     * playerSeasonStatsByTeam - Player Season Stats by Team
    **/
    playerSeasonStatsByTeam(req: operations.PlayerSeasonStatsByTeamRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonStatsByTeamResponse>;
    /**
     * playerSeasonStatsSplitByTeam - Player Season Stats Split By Team
    **/
    playerSeasonStatsSplitByTeam(req: operations.PlayerSeasonStatsSplitByTeamRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonStatsSplitByTeamResponse>;
    /**
     * playersByTeam - Players by Team
    **/
    playersByTeam(req: operations.PlayersByTeamRequest, config?: AxiosRequestConfig): Promise<operations.PlayersByTeamResponse>;
    /**
     * schedules - Schedules
    **/
    schedules(req: operations.SchedulesRequest, config?: AxiosRequestConfig): Promise<operations.SchedulesResponse>;
    /**
     * stadiums - Stadiums
    **/
    stadiums(req: operations.StadiumsRequest, config?: AxiosRequestConfig): Promise<operations.StadiumsResponse>;
    /**
     * standings - Standings
    **/
    standings(req: operations.StandingsRequest, config?: AxiosRequestConfig): Promise<operations.StandingsResponse>;
    /**
     * teamGameStatsByDate - Team Game Stats by Date
    **/
    teamGameStatsByDate(req: operations.TeamGameStatsByDateRequest, config?: AxiosRequestConfig): Promise<operations.TeamGameStatsByDateResponse>;
    /**
     * teamHittingVsStartingPitcher - Team Hitting vs. Starting Pitcher
    **/
    teamHittingVsStartingPitcher(req: operations.TeamHittingVsStartingPitcherRequest, config?: AxiosRequestConfig): Promise<operations.TeamHittingVsStartingPitcherResponse>;
    /**
     * teamSeasonStats - Team Season Stats
    **/
    teamSeasonStats(req: operations.TeamSeasonStatsRequest, config?: AxiosRequestConfig): Promise<operations.TeamSeasonStatsResponse>;
    /**
     * teamsActive - Teams (Active)
    **/
    teamsActive(req: operations.TeamsActiveRequest, config?: AxiosRequestConfig): Promise<operations.TeamsActiveResponse>;
    /**
     * teamsAll - Teams (All)
    **/
    teamsAll(req: operations.TeamsAllRequest, config?: AxiosRequestConfig): Promise<operations.TeamsAllResponse>;
}
export {};
