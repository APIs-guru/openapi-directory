import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class VideosViewingPrivacy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addVideoPrivacyUser - Permit a specific user to view a private video
    **/
    addVideoPrivacyUser(req: operations.AddVideoPrivacyUserRequest, config?: AxiosRequestConfig): Promise<operations.AddVideoPrivacyUserResponse>;
    /**
     * addVideoPrivacyUsers - Permit a list of users to view a private video
     *
     * The body of this request should follow our
     * [batch request format](https://developer.vimeo.com/api/common-formats#batch-requests). Each object must contain
     * a single `URI` field, and the value of this field must be the URI of the user who can view this video.
    **/
    addVideoPrivacyUsers(req: operations.AddVideoPrivacyUsersRequest, config?: AxiosRequestConfig): Promise<operations.AddVideoPrivacyUsersResponse>;
    /**
     * addVideoPrivacyUsersAlt1 - Permit a list of users to view a private video
     *
     * The body of this request should follow our
     * [batch request format](https://developer.vimeo.com/api/common-formats#batch-requests). Each object must contain
     * a single `URI` field, and the value of this field must be the URI of the user who can view this video.
    **/
    addVideoPrivacyUsersAlt1(req: operations.AddVideoPrivacyUsersAlt1Request, config?: AxiosRequestConfig): Promise<operations.AddVideoPrivacyUsersAlt1Response>;
    /**
     * deleteVideoPrivacyUser - Restrict a user from viewing a private video
    **/
    deleteVideoPrivacyUser(req: operations.DeleteVideoPrivacyUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVideoPrivacyUserResponse>;
    /**
     * getVideoPrivacyUsers - Get all the users who can view a user's private videos by default
    **/
    getVideoPrivacyUsers(req: operations.GetVideoPrivacyUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoPrivacyUsersResponse>;
    /**
     * getVideoPrivacyUsersAlt1 - Get all the users who can view a user's private videos by default
    **/
    getVideoPrivacyUsersAlt1(req: operations.GetVideoPrivacyUsersAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetVideoPrivacyUsersAlt1Response>;
}
