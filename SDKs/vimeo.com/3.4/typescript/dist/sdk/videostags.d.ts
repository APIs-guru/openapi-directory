import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class VideosTags {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addVideoTag - Add a specific tag to a video
    **/
    addVideoTag(req: operations.AddVideoTagRequest, config?: AxiosRequestConfig): Promise<operations.AddVideoTagResponse>;
    /**
     * addVideoTags - Add a list of tags to a video
    **/
    addVideoTags(req: operations.AddVideoTagsRequest, config?: AxiosRequestConfig): Promise<operations.AddVideoTagsResponse>;
    /**
     * checkVideoForTag - Check if a tag has been added to a video
    **/
    checkVideoForTag(req: operations.CheckVideoForTagRequest, config?: AxiosRequestConfig): Promise<operations.CheckVideoForTagResponse>;
    /**
     * deleteVideoTag - Remove a tag from a video
    **/
    deleteVideoTag(req: operations.DeleteVideoTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVideoTagResponse>;
    /**
     * getVideoTags - Get all the tags of a video
    **/
    getVideoTags(req: operations.GetVideoTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoTagsResponse>;
    /**
     * getVideosWithTag - Get all the videos with a specific tag
    **/
    getVideosWithTag(req: operations.GetVideosWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetVideosWithTagResponse>;
}
