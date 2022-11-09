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
    ProjectedPlayerGameStatsByDateWInjuriesDfsSalaries(req: operations.ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesResponse>;
    ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalaries(req: operations.ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesResponse>;
    ProjectedPlayerSeasonStats(req: operations.ProjectedPlayerSeasonStatsRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerSeasonStatsResponse>;
    ProjectedPlayerSeasonStatsByPlayer(req: operations.ProjectedPlayerSeasonStatsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerSeasonStatsByPlayerResponse>;
    ProjectedPlayerSeasonStatsByTeam(req: operations.ProjectedPlayerSeasonStatsByTeamRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerSeasonStatsByTeamResponse>;
}
export {};
