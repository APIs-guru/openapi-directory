import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Account {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * authenticate - Authenticates a User
    **/
    authenticate(req: operations.AuthenticateRequest, config?: AxiosRequestConfig): Promise<operations.AuthenticateResponse>;
    /**
     * authenticatePost - Authenticates a user
    **/
    authenticatePost(req: operations.AuthenticatePostRequest, config?: AxiosRequestConfig): Promise<operations.AuthenticatePostResponse>;
    /**
     * getApiTokenStatus - Returns usage statistics for the API account.
    **/
    getApiTokenStatus(req: operations.GetApiTokenStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetApiTokenStatusResponse>;
    /**
     * getLoggedInUser - Returns the logged-in User
     *
     * Requires a valid auth_token to be set.
    **/
    getLoggedInUser(req: operations.GetLoggedInUserRequest, config?: AxiosRequestConfig): Promise<operations.GetLoggedInUserResponse>;
    /**
     * getWordListsForLoggedInUser - Fetches WordList objects for the logged-in user.
    **/
    getWordListsForLoggedInUser(req: operations.GetWordListsForLoggedInUserRequest, config?: AxiosRequestConfig): Promise<operations.GetWordListsForLoggedInUserResponse>;
}
