import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ChannelsPrivateChannelMembers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteChannelPrivacyUser - Restrict a user from viewing a private channel
     *
     * This method prevents a single user from being able to access the specified private channel.
    **/
    deleteChannelPrivacyUser(req: operations.DeleteChannelPrivacyUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteChannelPrivacyUserResponse>;
    /**
     * getChannelPrivacyUsers - Get all the users who can view a private channel
     *
     * This method gets all the users who have access to the specified private channel.
    **/
    getChannelPrivacyUsers(req: operations.GetChannelPrivacyUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelPrivacyUsersResponse>;
    /**
     * setChannelPrivacyUser - Permit a specific user to view a private channel
     *
     * This method gives a single user access to the specified private channel.
    **/
    setChannelPrivacyUser(req: operations.SetChannelPrivacyUserRequest, config?: AxiosRequestConfig): Promise<operations.SetChannelPrivacyUserResponse>;
    /**
     * setChannelPrivacyUsers - Permit a list of users to view a private channel
     *
     * This method gives multiple users access to the specified private channel.
    **/
    setChannelPrivacyUsers(req: operations.SetChannelPrivacyUsersRequest, config?: AxiosRequestConfig): Promise<operations.SetChannelPrivacyUsersResponse>;
}
