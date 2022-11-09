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
    ProjectedPlayerGameStatsByCompetitionWDfsSalaries(req: operations.ProjectedPlayerGameStatsByCompetitionWDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByCompetitionWDfsSalariesResponse>;
    ProjectedPlayerGameStatsByDateWDfsSalaries(req: operations.ProjectedPlayerGameStatsByDateWDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByDateWDfsSalariesResponse>;
    ProjectedPlayerGameStatsByPlayerWDfsSalaries(req: operations.ProjectedPlayerGameStatsByPlayerWDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByPlayerWDfsSalariesResponse>;
    UpcomingDfsSlatesByCompetition(req: operations.UpcomingDfsSlatesByCompetitionRequest, config?: AxiosRequestConfig): Promise<operations.UpcomingDfsSlatesByCompetitionResponse>;
}
export {};
