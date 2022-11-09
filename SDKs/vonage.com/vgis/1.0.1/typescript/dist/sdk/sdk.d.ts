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
    CallAnswer(req: operations.CallAnswerRequest, config?: AxiosRequestConfig): Promise<operations.CallAnswerResponse>;
    CallHold(req: operations.CallHoldRequest, config?: AxiosRequestConfig): Promise<operations.CallHoldResponse>;
    CallTransfer(req: operations.CallTransferRequest, config?: AxiosRequestConfig): Promise<operations.CallTransferResponse>;
    CallUnold(req: operations.CallUnoldRequest, config?: AxiosRequestConfig): Promise<operations.CallUnoldResponse>;
    CallVmTransfer(req: operations.CallVmTransferRequest, config?: AxiosRequestConfig): Promise<operations.CallVmTransferResponse>;
    CreateCall(req: operations.CreateCallRequest, config?: AxiosRequestConfig): Promise<operations.CreateCallResponse>;
    CreateWebhook(req: operations.CreateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.CreateWebhookResponse>;
    DestroyCall(req: operations.DestroyCallRequest, config?: AxiosRequestConfig): Promise<operations.DestroyCallResponse>;
    DestroyWebhook(req: operations.DestroyWebhookRequest, config?: AxiosRequestConfig): Promise<operations.DestroyWebhookResponse>;
    GetAccount(config?: AxiosRequestConfig): Promise<operations.GetAccountResponse>;
    GetCallsCount(req: operations.GetCallsCountRequest, config?: AxiosRequestConfig): Promise<operations.GetCallsCountResponse>;
    GetEvent(req: operations.GetEventRequest, config?: AxiosRequestConfig): Promise<operations.GetEventResponse>;
    GetEventsCount(req: operations.GetEventsCountRequest, config?: AxiosRequestConfig): Promise<operations.GetEventsCountResponse>;
    GetRoles(req: operations.GetRolesRequest, config?: AxiosRequestConfig): Promise<operations.GetRolesResponse>;
    GetUser(config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    /**
     * Lists currently active calls
    **/
    ListCalls(req: operations.ListCallsRequest, config?: AxiosRequestConfig): Promise<operations.ListCallsResponse>;
    ListEvents(req: operations.ListEventsRequest, config?: AxiosRequestConfig): Promise<operations.ListEventsResponse>;
    ListWebhooks(config?: AxiosRequestConfig): Promise<operations.ListWebhooksResponse>;
    RenewWebhook(req: operations.RenewWebhookRequest, config?: AxiosRequestConfig): Promise<operations.RenewWebhookResponse>;
    ViewWebhook(req: operations.ViewWebhookRequest, config?: AxiosRequestConfig): Promise<operations.ViewWebhookResponse>;
}
export {};
