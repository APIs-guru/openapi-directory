import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    CreateCommand(req: operations.CreateCommandRequest, config?: AxiosRequestConfig): Promise<operations.CreateCommandResponse>;
    CreateRatePlan(req: operations.CreateRatePlanRequest, config?: AxiosRequestConfig): Promise<operations.CreateRatePlanResponse>;
    DeleteCommand(req: operations.DeleteCommandRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCommandResponse>;
    DeleteRatePlan(req: operations.DeleteRatePlanRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRatePlanResponse>;
    DeleteSim(req: operations.DeleteSimRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSimResponse>;
    FetchCommand(req: operations.FetchCommandRequest, config?: AxiosRequestConfig): Promise<operations.FetchCommandResponse>;
    FetchRatePlan(req: operations.FetchRatePlanRequest, config?: AxiosRequestConfig): Promise<operations.FetchRatePlanResponse>;
    FetchSim(req: operations.FetchSimRequest, config?: AxiosRequestConfig): Promise<operations.FetchSimResponse>;
    ListAccountUsageRecord(req: operations.ListAccountUsageRecordRequest, config?: AxiosRequestConfig): Promise<operations.ListAccountUsageRecordResponse>;
    ListCommand(req: operations.ListCommandRequest, config?: AxiosRequestConfig): Promise<operations.ListCommandResponse>;
    ListDataSession(req: operations.ListDataSessionRequest, config?: AxiosRequestConfig): Promise<operations.ListDataSessionResponse>;
    ListRatePlan(req: operations.ListRatePlanRequest, config?: AxiosRequestConfig): Promise<operations.ListRatePlanResponse>;
    ListSim(req: operations.ListSimRequest, config?: AxiosRequestConfig): Promise<operations.ListSimResponse>;
    ListUsageRecord(req: operations.ListUsageRecordRequest, config?: AxiosRequestConfig): Promise<operations.ListUsageRecordResponse>;
    UpdateRatePlan(req: operations.UpdateRatePlanRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRatePlanResponse>;
    UpdateSim(req: operations.UpdateSimRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSimResponse>;
}
export {};
