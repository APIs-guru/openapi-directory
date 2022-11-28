import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://wireless.twilio.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * createCommand - Send a Command to a Sim.
    **/
    createCommand(req: operations.CreateCommandRequest, config?: AxiosRequestConfig): Promise<operations.CreateCommandResponse>;
    createRatePlan(req: operations.CreateRatePlanRequest, config?: AxiosRequestConfig): Promise<operations.CreateRatePlanResponse>;
    /**
     * deleteCommand - Delete a Command instance from your account.
    **/
    deleteCommand(req: operations.DeleteCommandRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCommandResponse>;
    deleteRatePlan(req: operations.DeleteRatePlanRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRatePlanResponse>;
    /**
     * deleteSim - Delete a Sim resource on your Account.
    **/
    deleteSim(req: operations.DeleteSimRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSimResponse>;
    /**
     * fetchCommand - Fetch a Command instance from your account.
    **/
    fetchCommand(req: operations.FetchCommandRequest, config?: AxiosRequestConfig): Promise<operations.FetchCommandResponse>;
    fetchRatePlan(req: operations.FetchRatePlanRequest, config?: AxiosRequestConfig): Promise<operations.FetchRatePlanResponse>;
    /**
     * fetchSim - Fetch a Sim resource on your Account.
    **/
    fetchSim(req: operations.FetchSimRequest, config?: AxiosRequestConfig): Promise<operations.FetchSimResponse>;
    listAccountUsageRecord(req: operations.ListAccountUsageRecordRequest, config?: AxiosRequestConfig): Promise<operations.ListAccountUsageRecordResponse>;
    /**
     * listCommand - Retrieve a list of Commands from your account.
    **/
    listCommand(req: operations.ListCommandRequest, config?: AxiosRequestConfig): Promise<operations.ListCommandResponse>;
    listDataSession(req: operations.ListDataSessionRequest, config?: AxiosRequestConfig): Promise<operations.ListDataSessionResponse>;
    listRatePlan(req: operations.ListRatePlanRequest, config?: AxiosRequestConfig): Promise<operations.ListRatePlanResponse>;
    /**
     * listSim - Retrieve a list of Sim resources on your Account.
    **/
    listSim(req: operations.ListSimRequest, config?: AxiosRequestConfig): Promise<operations.ListSimResponse>;
    listUsageRecord(req: operations.ListUsageRecordRequest, config?: AxiosRequestConfig): Promise<operations.ListUsageRecordResponse>;
    updateRatePlan(req: operations.UpdateRatePlanRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRatePlanResponse>;
    /**
     * updateSim - Updates the given properties of a Sim resource on your Account.
    **/
    updateSim(req: operations.UpdateSimRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSimResponse>;
}
export {};
