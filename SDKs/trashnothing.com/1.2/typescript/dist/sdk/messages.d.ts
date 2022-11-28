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
     * archiveConversation - Archive conversation
    **/
    archiveConversation(req: operations.ArchiveConversationRequest, config?: AxiosRequestConfig): Promise<operations.ArchiveConversationResponse>;
    /**
     * blockConversation - Block conversation
    **/
    blockConversation(req: operations.BlockConversationRequest, config?: AxiosRequestConfig): Promise<operations.BlockConversationResponse>;
    /**
     * deleteConversation - Delete conversation
    **/
    deleteConversation(req: operations.DeleteConversationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConversationResponse>;
    /**
     * getConversationMessages - List conversation messages
    **/
    getConversationMessages(req: operations.GetConversationMessagesRequest, config?: AxiosRequestConfig): Promise<operations.GetConversationMessagesResponse>;
    /**
     * getConversations - List conversations
    **/
    getConversations(req: operations.GetConversationsRequest, config?: AxiosRequestConfig): Promise<operations.GetConversationsResponse>;
    /**
     * markAllConversationsRead - Mark all conversations as read
    **/
    markAllConversationsRead(req: operations.MarkAllConversationsReadRequest, config?: AxiosRequestConfig): Promise<operations.MarkAllConversationsReadResponse>;
    /**
     * markConversationRead - Mark conversation as read
    **/
    markConversationRead(req: operations.MarkConversationReadRequest, config?: AxiosRequestConfig): Promise<operations.MarkConversationReadResponse>;
    /**
     * replyToConversation - Reply to conversation
    **/
    replyToConversation(req: operations.ReplyToConversationRequest, config?: AxiosRequestConfig): Promise<operations.ReplyToConversationResponse>;
    /**
     * reportConversation - Report conversation
    **/
    reportConversation(req: operations.ReportConversationRequest, config?: AxiosRequestConfig): Promise<operations.ReportConversationResponse>;
    /**
     * searchConversations - Search conversations
     *
     * Searches all conversations except blocked conversations.
    **/
    searchConversations(req: operations.SearchConversationsRequest, config?: AxiosRequestConfig): Promise<operations.SearchConversationsResponse>;
    /**
     * unarchiveConversation - Unarchive conversation
    **/
    unarchiveConversation(req: operations.UnarchiveConversationRequest, config?: AxiosRequestConfig): Promise<operations.UnarchiveConversationResponse>;
    /**
     * unblockConversation - Unblock conversation
    **/
    unblockConversation(req: operations.UnblockConversationRequest, config?: AxiosRequestConfig): Promise<operations.UnblockConversationResponse>;
}
