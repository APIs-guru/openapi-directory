import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class GroupsVideos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addVideoToGroup - Add a video to a group
    **/
    addVideoToGroup(req: operations.AddVideoToGroupRequest, config?: AxiosRequestConfig): Promise<operations.AddVideoToGroupResponse>;
    /**
     * deleteVideoFromGroup - Remove a video from a group
    **/
    deleteVideoFromGroup(req: operations.DeleteVideoFromGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVideoFromGroupResponse>;
    /**
     * getGroupVideo - Get a specific video in a group
     *
     * Check if a group has a video.
    **/
    getGroupVideo(req: operations.GetGroupVideoRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupVideoResponse>;
    /**
     * getGroupVideos - Get all the videos in a group
    **/
    getGroupVideos(req: operations.GetGroupVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupVideosResponse>;
}
