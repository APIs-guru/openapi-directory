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
    ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalaries(req: operations.ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesResponse>;
    ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries(req: operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse>;
    ProjectedPlayerSeasonStatsWithAdp(req: operations.ProjectedPlayerSeasonStatsWithAdpRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerSeasonStatsWithAdpResponse>;
}
export {};
