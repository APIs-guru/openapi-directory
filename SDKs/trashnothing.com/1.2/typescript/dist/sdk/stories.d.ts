import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Stories {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getStories - List stories
    **/
    getStories(req: operations.GetStoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetStoriesResponse>;
    /**
     * getStory - Retrieve a story
    **/
    getStory(req: operations.GetStoryRequest, config?: AxiosRequestConfig): Promise<operations.GetStoryResponse>;
    /**
     * likeStory - Like a story
    **/
    likeStory(req: operations.LikeStoryRequest, config?: AxiosRequestConfig): Promise<operations.LikeStoryResponse>;
    /**
     * submitStory - Submit a story
    **/
    submitStory(req: operations.SubmitStoryRequest, config?: AxiosRequestConfig): Promise<operations.SubmitStoryResponse>;
    /**
     * unlikeStory - Unlike a story
    **/
    unlikeStory(req: operations.UnlikeStoryRequest, config?: AxiosRequestConfig): Promise<operations.UnlikeStoryResponse>;
    /**
     * viewedStory - Record story viewed
     *
     * Records every time a user views the full story (and not just a preview or snippet),
    **/
    viewedStory(req: operations.ViewedStoryRequest, config?: AxiosRequestConfig): Promise<operations.ViewedStoryResponse>;
}
