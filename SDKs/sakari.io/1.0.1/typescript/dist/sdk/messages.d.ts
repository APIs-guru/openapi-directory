import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Messages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * messagesFetch - Fetch message by id
     *
     * Returns a single messag
    **/
    messagesFetch(req: operations.MessagesFetchRequest, config?: AxiosRequestConfig): Promise<operations.MessagesFetchResponse>;
    /**
     * messagesFetchAll - Fetch messages
    **/
    messagesFetchAll(req: operations.MessagesFetchAllRequest, config?: AxiosRequestConfig): Promise<operations.MessagesFetchAllResponse>;
    /**
     * messagesSend - Send Messages
    **/
    messagesSend(req: operations.MessagesSendRequest, config?: AxiosRequestConfig): Promise<operations.MessagesSendResponse>;
}
