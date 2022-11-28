import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ChannelsEssentials {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createChannel - Create a channel
     *
     * This method creates a new channel.
    **/
    createChannel(req: operations.CreateChannelRequest, config?: AxiosRequestConfig): Promise<operations.CreateChannelResponse>;
    /**
     * deleteChannel - Delete a channel
    **/
    deleteChannel(req: operations.DeleteChannelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteChannelResponse>;
    /**
     * editChannel - Edit a channel
     *
     * This method edits the specified channel.
    **/
    editChannel(req: operations.EditChannelRequest, config?: AxiosRequestConfig): Promise<operations.EditChannelResponse>;
    /**
     * getChannel - Get a specific channel
    **/
    getChannel(req: operations.GetChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelResponse>;
    /**
     * getChannelSubscriptions - Get all the channels to which a user subscribes
    **/
    getChannelSubscriptions(req: operations.GetChannelSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelSubscriptionsResponse>;
    /**
     * getChannelSubscriptionsAlt1 - Get all the channels to which a user subscribes
    **/
    getChannelSubscriptionsAlt1(req: operations.GetChannelSubscriptionsAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetChannelSubscriptionsAlt1Response>;
    /**
     * getChannels - Get all channels
    **/
    getChannels(req: operations.GetChannelsRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelsResponse>;
}
