import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class VideosComments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createComment - Add a comment to a video
    **/
    createComment(req: operations.CreateCommentRequest, config?: AxiosRequestConfig): Promise<operations.CreateCommentResponse>;
    /**
     * createCommentAlt1 - Add a comment to a video
    **/
    createCommentAlt1(req: operations.CreateCommentAlt1Request, config?: AxiosRequestConfig): Promise<operations.CreateCommentAlt1Response>;
    /**
     * createCommentReply - Add a reply to a video comment
    **/
    createCommentReply(req: operations.CreateCommentReplyRequest, config?: AxiosRequestConfig): Promise<operations.CreateCommentReplyResponse>;
    /**
     * deleteComment - Delete a video comment
    **/
    deleteComment(req: operations.DeleteCommentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCommentResponse>;
    /**
     * editComment - Edit a video comment
    **/
    editComment(req: operations.EditCommentRequest, config?: AxiosRequestConfig): Promise<operations.EditCommentResponse>;
    /**
     * getComment - Get a specific video comment
    **/
    getComment(req: operations.GetCommentRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentResponse>;
    /**
     * getCommentReplies - Get all the replies to a video comment
    **/
    getCommentReplies(req: operations.GetCommentRepliesRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentRepliesResponse>;
    /**
     * getComments - Get all the comments on a video
    **/
    getComments(req: operations.GetCommentsRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentsResponse>;
    /**
     * getCommentsAlt1 - Get all the comments on a video
    **/
    getCommentsAlt1(req: operations.GetCommentsAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetCommentsAlt1Response>;
}
