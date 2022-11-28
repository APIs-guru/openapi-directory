import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ChannelsVideos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addVideoToChannel - Add a specific video to a channel
    **/
    addVideoToChannel(req: operations.AddVideoToChannelRequest, config?: AxiosRequestConfig): Promise<operations.AddVideoToChannelResponse>;
    /**
     * addVideosToChannel - Add a list of videos to a channel
    **/
    addVideosToChannel(req: operations.AddVideosToChannelRequest, config?: AxiosRequestConfig): Promise<operations.AddVideosToChannelResponse>;
    /**
     * deleteVideoFromChannel - Remove a specific video from a channel
    **/
    deleteVideoFromChannel(req: operations.DeleteVideoFromChannelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVideoFromChannelResponse>;
    /**
     * getAvailableVideoChannels - Get all the channels to which a user can add or remove a specific video
    **/
    getAvailableVideoChannels(req: operations.GetAvailableVideoChannelsRequest, config?: AxiosRequestConfig): Promise<operations.GetAvailableVideoChannelsResponse>;
    /**
     * getChannelVideo - Get a specific video in a channel
     *
     * This method returns a specific video in a channel. You can use it to determine whether the video is in the channel.
    **/
    getChannelVideo(req: operations.GetChannelVideoRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelVideoResponse>;
    /**
     * getChannelVideos - Get all the videos in a channel
    **/
    getChannelVideos(req: operations.GetChannelVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelVideosResponse>;
    /**
     * removeVideosFromChannel - Remove a list of videos from a channel
    **/
    removeVideosFromChannel(req: operations.RemoveVideosFromChannelRequest, config?: AxiosRequestConfig): Promise<operations.RemoveVideosFromChannelResponse>;
}
