import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class OnDemandVideos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addVideoToVod - Add a video to an On Demand page
    **/
    addVideoToVod(req: operations.AddVideoToVodRequest, config?: AxiosRequestConfig): Promise<operations.AddVideoToVodResponse>;
    /**
     * deleteVideoFromVod - Remove a video from an On Demand page
    **/
    deleteVideoFromVod(req: operations.DeleteVideoFromVodRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVideoFromVodResponse>;
    /**
     * getVodVideo - Get a specific video on an On Demand page
    **/
    getVodVideo(req: operations.GetVodVideoRequest, config?: AxiosRequestConfig): Promise<operations.GetVodVideoResponse>;
    /**
     * getVodVideos - Get all the videos on an On Demand page
    **/
    getVodVideos(req: operations.GetVodVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetVodVideosResponse>;
}
