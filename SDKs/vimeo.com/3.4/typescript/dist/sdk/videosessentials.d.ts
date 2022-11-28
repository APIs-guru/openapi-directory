import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class VideosEssentials {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * checkIfUserOwnsVideo - Check if a user owns a video
    **/
    checkIfUserOwnsVideo(req: operations.CheckIfUserOwnsVideoRequest, config?: AxiosRequestConfig): Promise<operations.CheckIfUserOwnsVideoResponse>;
    /**
     * checkIfUserOwnsVideoAlt1 - Check if a user owns a video
    **/
    checkIfUserOwnsVideoAlt1(req: operations.CheckIfUserOwnsVideoAlt1Request, config?: AxiosRequestConfig): Promise<operations.CheckIfUserOwnsVideoAlt1Response>;
    /**
     * deleteVideo - Delete a video
    **/
    deleteVideo(req: operations.DeleteVideoRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVideoResponse>;
    /**
     * editVideo - Edit a video
    **/
    editVideo(req: operations.EditVideoRequest, config?: AxiosRequestConfig): Promise<operations.EditVideoResponse>;
    /**
     * getAppearances - Get all the videos in which a user appears
    **/
    getAppearances(req: operations.GetAppearancesRequest, config?: AxiosRequestConfig): Promise<operations.GetAppearancesResponse>;
    /**
     * getAppearancesAlt1 - Get all the videos in which a user appears
    **/
    getAppearancesAlt1(req: operations.GetAppearancesAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetAppearancesAlt1Response>;
    /**
     * getVideo - Get a specific video
    **/
    getVideo(req: operations.GetVideoRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoResponse>;
    /**
     * getVideos - Get all the videos that a user has uploaded
    **/
    getVideos(req: operations.GetVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetVideosResponse>;
    /**
     * getVideosAlt1 - Get all the videos that a user has uploaded
    **/
    getVideosAlt1(req: operations.GetVideosAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetVideosAlt1Response>;
    /**
     * searchVideos - Search for videos
    **/
    searchVideos(req: operations.SearchVideosRequest, config?: AxiosRequestConfig): Promise<operations.SearchVideosResponse>;
}
