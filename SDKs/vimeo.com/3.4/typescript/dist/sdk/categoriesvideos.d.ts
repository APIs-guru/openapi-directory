import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CategoriesVideos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * checkCategoryForVideo - Check for a video in a category
    **/
    checkCategoryForVideo(req: operations.CheckCategoryForVideoRequest, config?: AxiosRequestConfig): Promise<operations.CheckCategoryForVideoResponse>;
    /**
     * getCategoryVideos - Get all the videos in a category
    **/
    getCategoryVideos(req: operations.GetCategoryVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoryVideosResponse>;
    /**
     * getVideoCategories - Get all the categories to which a video belongs
    **/
    getVideoCategories(req: operations.GetVideoCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoCategoriesResponse>;
    /**
     * suggestVideoCategory - Suggest categories for a video
     *
     * With this method, you can suggest up to two categories and one subcategory for a video. Vimeo makes the final determination about whether the video
     * belongs in these categories.
    **/
    suggestVideoCategory(req: operations.SuggestVideoCategoryRequest, config?: AxiosRequestConfig): Promise<operations.SuggestVideoCategoryResponse>;
}
