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
     * lineCombinationsBySeason - Line Combinations by Season
    **/
    lineCombinationsBySeason(req: operations.LineCombinationsBySeasonRequest, config?: AxiosRequestConfig): Promise<operations.LineCombinationsBySeasonResponse>;
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
     * playerDetailsByFreeAgent - Player Details by Free Agent
    **/
    playerDetailsByFreeAgent(req: operations.PlayerDetailsByFreeAgentRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByFreeAgentResponse>;
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
     * teamSeasonStats - Team Season Stats
    **/
    teamSeasonStats(req: operations.TeamSeasonStatsRequest, config?: AxiosRequestConfig): Promise<operations.TeamSeasonStatsResponse>;
    /**
     * teamStatsAllowedByPosition - Team Stats Allowed by Position
    **/
    teamStatsAllowedByPosition(req: operations.TeamStatsAllowedByPositionRequest, config?: AxiosRequestConfig): Promise<operations.TeamStatsAllowedByPositionResponse>;
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
