import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class WatchLaterQueueEssentials {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addVideoToWatchLater - Add a video to a user's Watch Later queue
    **/
    addVideoToWatchLater(req: operations.AddVideoToWatchLaterRequest, config?: AxiosRequestConfig): Promise<operations.AddVideoToWatchLaterResponse>;
    /**
     * addVideoToWatchLaterAlt1 - Add a video to a user's Watch Later queue
    **/
    addVideoToWatchLaterAlt1(req: operations.AddVideoToWatchLaterAlt1Request, config?: AxiosRequestConfig): Promise<operations.AddVideoToWatchLaterAlt1Response>;
    /**
     * checkWatchLaterQueue - Check if a user has added a specific video to their Watch Later queue
    **/
    checkWatchLaterQueue(req: operations.CheckWatchLaterQueueRequest, config?: AxiosRequestConfig): Promise<operations.CheckWatchLaterQueueResponse>;
    /**
     * checkWatchLaterQueueAlt1 - Check if a user has added a specific video to their Watch Later queue
    **/
    checkWatchLaterQueueAlt1(req: operations.CheckWatchLaterQueueAlt1Request, config?: AxiosRequestConfig): Promise<operations.CheckWatchLaterQueueAlt1Response>;
    /**
     * deleteVideoFromWatchLater - Remove a video from a user's Watch Later queue
    **/
    deleteVideoFromWatchLater(req: operations.DeleteVideoFromWatchLaterRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVideoFromWatchLaterResponse>;
    /**
     * deleteVideoFromWatchLaterAlt1 - Remove a video from a user's Watch Later queue
    **/
    deleteVideoFromWatchLaterAlt1(req: operations.DeleteVideoFromWatchLaterAlt1Request, config?: AxiosRequestConfig): Promise<operations.DeleteVideoFromWatchLaterAlt1Response>;
    /**
     * getWatchLaterQueue - Get all the videos in a user's Watch Later queue
    **/
    getWatchLaterQueue(req: operations.GetWatchLaterQueueRequest, config?: AxiosRequestConfig): Promise<operations.GetWatchLaterQueueResponse>;
    /**
     * getWatchLaterQueueAlt1 - Get all the videos in a user's Watch Later queue
    **/
    getWatchLaterQueueAlt1(req: operations.GetWatchLaterQueueAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetWatchLaterQueueAlt1Response>;
}
