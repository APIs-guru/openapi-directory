import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Conversations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * conversationsClose - Closes a conversation
    **/
    conversationsClose(req: operations.ConversationsCloseRequest, config?: AxiosRequestConfig): Promise<operations.ConversationsCloseResponse>;
    /**
     * conversationsFetch - Fetch conversation by ID
    **/
    conversationsFetch(req: operations.ConversationsFetchRequest, config?: AxiosRequestConfig): Promise<operations.ConversationsFetchResponse>;
    /**
     * conversationsFetchAll - Fetch conversations
    **/
    conversationsFetchAll(req: operations.ConversationsFetchAllRequest, config?: AxiosRequestConfig): Promise<operations.ConversationsFetchAllResponse>;
}
