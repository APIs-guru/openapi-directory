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
    DfsSlatesByDate(req: operations.DfsSlatesByDateRequest, config?: AxiosRequestConfig): Promise<operations.DfsSlatesByDateResponse>;
    DfsSlatesByWeek(req: operations.DfsSlatesByWeekRequest, config?: AxiosRequestConfig): Promise<operations.DfsSlatesByWeekResponse>;
    IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries(req: operations.IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse>;
    IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries(req: operations.IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse>;
    IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries(req: operations.IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse>;
    ProjectedFantasyDefenseGameStatsWDfsSalaries(req: operations.ProjectedFantasyDefenseGameStatsWDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedFantasyDefenseGameStatsWDfsSalariesResponse>;
    ProjectedFantasyDefenseSeasonStatsWByeWeekAdp(req: operations.ProjectedFantasyDefenseSeasonStatsWByeWeekAdpRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedFantasyDefenseSeasonStatsWByeWeekAdpResponse>;
    ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries(req: operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse>;
    ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries(req: operations.ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse>;
    ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries(req: operations.ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse>;
    ProjectedPlayerSeasonStatsByPlayerWByeWeekAdp(req: operations.ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpResponse>;
    ProjectedPlayerSeasonStatsByTeamWByeWeekAdp(req: operations.ProjectedPlayerSeasonStatsByTeamWByeWeekAdpRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerSeasonStatsByTeamWByeWeekAdpResponse>;
    ProjectedPlayerSeasonStatsWByeWeekAdp(req: operations.ProjectedPlayerSeasonStatsWByeWeekAdpRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerSeasonStatsWByeWeekAdpResponse>;
}
export {};
