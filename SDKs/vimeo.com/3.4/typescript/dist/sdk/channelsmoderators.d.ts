import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ChannelsModerators {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addChannelModerator - Add a specific channel moderator
    **/
    addChannelModerator(req: operations.AddChannelModeratorRequest, config?: AxiosRequestConfig): Promise<operations.AddChannelModeratorResponse>;
    /**
     * addChannelModerators - Add a list of channel moderators
    **/
    addChannelModerators(req: operations.AddChannelModeratorsRequest, config?: AxiosRequestConfig): Promise<operations.AddChannelModeratorsResponse>;
    /**
     * getChannelModerator - Get a specific channel moderator
    **/
    getChannelModerator(req: operations.GetChannelModeratorRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelModeratorResponse>;
    /**
     * getChannelModerators - Get all the moderators in a channel
    **/
    getChannelModerators(req: operations.GetChannelModeratorsRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelModeratorsResponse>;
    /**
     * removeChannelModerator - Remove a specific channel moderator
    **/
    removeChannelModerator(req: operations.RemoveChannelModeratorRequest, config?: AxiosRequestConfig): Promise<operations.RemoveChannelModeratorResponse>;
    /**
     * removeChannelModerators - Remove a list of channel moderators
    **/
    removeChannelModerators(req: operations.RemoveChannelModeratorsRequest, config?: AxiosRequestConfig): Promise<operations.RemoveChannelModeratorsResponse>;
    /**
     * replaceChannelModerators - Replace the moderators of a channel
    **/
    replaceChannelModerators(req: operations.ReplaceChannelModeratorsRequest, config?: AxiosRequestConfig): Promise<operations.ReplaceChannelModeratorsResponse>;
}
