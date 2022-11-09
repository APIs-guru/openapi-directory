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
    FetchAlert(req: operations.FetchAlertRequest, config?: AxiosRequestConfig): Promise<operations.FetchAlertResponse>;
    FetchEvent(req: operations.FetchEventRequest, config?: AxiosRequestConfig): Promise<operations.FetchEventResponse>;
    ListAlert(req: operations.ListAlertRequest, config?: AxiosRequestConfig): Promise<operations.ListAlertResponse>;
    ListEvent(req: operations.ListEventRequest, config?: AxiosRequestConfig): Promise<operations.ListEventResponse>;
}
export {};
