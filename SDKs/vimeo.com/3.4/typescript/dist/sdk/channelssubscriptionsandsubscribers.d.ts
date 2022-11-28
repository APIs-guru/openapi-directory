import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ChannelsSubscriptionsAndSubscribers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * checkIfUserSubscribedToChannel - Check if a user follows a channel
    **/
    checkIfUserSubscribedToChannel(req: operations.CheckIfUserSubscribedToChannelRequest, config?: AxiosRequestConfig): Promise<operations.CheckIfUserSubscribedToChannelResponse>;
    /**
     * checkIfUserSubscribedToChannelAlt1 - Check if a user follows a channel
    **/
    checkIfUserSubscribedToChannelAlt1(req: operations.CheckIfUserSubscribedToChannelAlt1Request, config?: AxiosRequestConfig): Promise<operations.CheckIfUserSubscribedToChannelAlt1Response>;
    /**
     * getChannelSubscribers - Get all the followers of a channel
    **/
    getChannelSubscribers(req: operations.GetChannelSubscribersRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelSubscribersResponse>;
    /**
     * subscribeToChannel - Subscribe a user to a specific channel
    **/
    subscribeToChannel(req: operations.SubscribeToChannelRequest, config?: AxiosRequestConfig): Promise<operations.SubscribeToChannelResponse>;
    /**
     * subscribeToChannelAlt1 - Subscribe a user to a specific channel
    **/
    subscribeToChannelAlt1(req: operations.SubscribeToChannelAlt1Request, config?: AxiosRequestConfig): Promise<operations.SubscribeToChannelAlt1Response>;
    /**
     * unsubscribeFromChannel - Unsubscribe a user from a specific channel
    **/
    unsubscribeFromChannel(req: operations.UnsubscribeFromChannelRequest, config?: AxiosRequestConfig): Promise<operations.UnsubscribeFromChannelResponse>;
    /**
     * unsubscribeFromChannelAlt1 - Unsubscribe a user from a specific channel
    **/
    unsubscribeFromChannelAlt1(req: operations.UnsubscribeFromChannelAlt1Request, config?: AxiosRequestConfig): Promise<operations.UnsubscribeFromChannelAlt1Response>;
}
