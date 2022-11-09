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
    ConferenceHierarchyWithTeams(req: operations.ConferenceHierarchyWithTeamsRequest, config?: AxiosRequestConfig): Promise<operations.ConferenceHierarchyWithTeamsResponse>;
    CurrentSeason(req: operations.CurrentSeasonRequest, config?: AxiosRequestConfig): Promise<operations.CurrentSeasonResponse>;
    CurrentSeasonDetails(req: operations.CurrentSeasonDetailsRequest, config?: AxiosRequestConfig): Promise<operations.CurrentSeasonDetailsResponse>;
    CurrentSeasontype(req: operations.CurrentSeasontypeRequest, config?: AxiosRequestConfig): Promise<operations.CurrentSeasontypeResponse>;
    CurrentWeek(req: operations.CurrentWeekRequest, config?: AxiosRequestConfig): Promise<operations.CurrentWeekResponse>;
    GamesByDate(req: operations.GamesByDateRequest, config?: AxiosRequestConfig): Promise<operations.GamesByDateResponse>;
    GamesByWeek(req: operations.GamesByWeekRequest, config?: AxiosRequestConfig): Promise<operations.GamesByWeekResponse>;
    PlayerDetailsByActive(req: operations.PlayerDetailsByActiveRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByActiveResponse>;
    PlayerDetailsByPlayer(req: operations.PlayerDetailsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByPlayerResponse>;
    PlayerDetailsByTeam(req: operations.PlayerDetailsByTeamRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByTeamResponse>;
    Schedules(req: operations.SchedulesRequest, config?: AxiosRequestConfig): Promise<operations.SchedulesResponse>;
    Stadiums(req: operations.StadiumsRequest, config?: AxiosRequestConfig): Promise<operations.StadiumsResponse>;
    TeamGameStatsByWeek(req: operations.TeamGameStatsByWeekRequest, config?: AxiosRequestConfig): Promise<operations.TeamGameStatsByWeekResponse>;
    TeamSeasonStatsStandings(req: operations.TeamSeasonStatsStandingsRequest, config?: AxiosRequestConfig): Promise<operations.TeamSeasonStatsStandingsResponse>;
    Teams(req: operations.TeamsRequest, config?: AxiosRequestConfig): Promise<operations.TeamsResponse>;
}
export {};
