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
     * currentSeason - Current Season
    **/
    currentSeason(req: operations.CurrentSeasonRequest, config?: AxiosRequestConfig): Promise<operations.CurrentSeasonResponse>;
    /**
     * dfsSlates - DFS Slates
    **/
    dfsSlates(req: operations.DfsSlatesRequest, config?: AxiosRequestConfig): Promise<operations.DfsSlatesResponse>;
    /**
     * injuries - Injuries
    **/
    injuries(req: operations.InjuriesRequest, config?: AxiosRequestConfig): Promise<operations.InjuriesResponse>;
    /**
     * injuriesHistorical - Injuries (Historical)
    **/
    injuriesHistorical(req: operations.InjuriesHistoricalRequest, config?: AxiosRequestConfig): Promise<operations.InjuriesHistoricalResponse>;
    /**
     * leaderboard - Leaderboard
    **/
    leaderboard(req: operations.LeaderboardRequest, config?: AxiosRequestConfig): Promise<operations.LeaderboardResponse>;
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
     * player - Player
    **/
    player(req: operations.PlayerRequest, config?: AxiosRequestConfig): Promise<operations.PlayerResponse>;
    /**
     * playerSeasonStatsWWorldGolfRankings - Player Season Stats (w/ World Golf Rankings)
    **/
    playerSeasonStatsWWorldGolfRankings(req: operations.PlayerSeasonStatsWWorldGolfRankingsRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonStatsWWorldGolfRankingsResponse>;
    /**
     * playerTournamentProjectedStatsWDraftkingsSalaries - Player Tournament Projected Stats (w/ DraftKings Salaries)
    **/
    playerTournamentProjectedStatsWDraftkingsSalaries(req: operations.PlayerTournamentProjectedStatsWDraftkingsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.PlayerTournamentProjectedStatsWDraftkingsSalariesResponse>;
    /**
     * playerTournamentStatsByPlayer - Player Tournament Stats By Player
    **/
    playerTournamentStatsByPlayer(req: operations.PlayerTournamentStatsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.PlayerTournamentStatsByPlayerResponse>;
    /**
     * players - Players
    **/
    players(req: operations.PlayersRequest, config?: AxiosRequestConfig): Promise<operations.PlayersResponse>;
    /**
     * schedule - Schedule
    **/
    schedule(req: operations.ScheduleRequest, config?: AxiosRequestConfig): Promise<operations.ScheduleResponse>;
    /**
     * scheduleBySeason - Schedule by Season
    **/
    scheduleBySeason(req: operations.ScheduleBySeasonRequest, config?: AxiosRequestConfig): Promise<operations.ScheduleBySeasonResponse>;
}
export {};
