import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class EmbedPresetsVideos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addVideoEmbedPreset - Add an embed preset to a video
    **/
    addVideoEmbedPreset(req: operations.AddVideoEmbedPresetRequest, config?: AxiosRequestConfig): Promise<operations.AddVideoEmbedPresetResponse>;
    /**
     * createVideoCustomLogo - Add a new custom logo to a video
    **/
    createVideoCustomLogo(req: operations.CreateVideoCustomLogoRequest, config?: AxiosRequestConfig): Promise<operations.CreateVideoCustomLogoResponse>;
    /**
     * deleteVideoEmbedPreset - Remove an embed preset from a video
    **/
    deleteVideoEmbedPreset(req: operations.DeleteVideoEmbedPresetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVideoEmbedPresetResponse>;
    /**
     * getEmbedPresetVideos - Get all the videos that have been added to an embed preset
    **/
    getEmbedPresetVideos(req: operations.GetEmbedPresetVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetEmbedPresetVideosResponse>;
    /**
     * getEmbedPresetVideosAlt1 - Get all the videos that have been added to an embed preset
    **/
    getEmbedPresetVideosAlt1(req: operations.GetEmbedPresetVideosAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetEmbedPresetVideosAlt1Response>;
    /**
     * getVideoCustomLogo - Get a custom video logo
    **/
    getVideoCustomLogo(req: operations.GetVideoCustomLogoRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoCustomLogoResponse>;
    /**
     * getVideoEmbedPreset - Check if an embed preset has been added to a video
    **/
    getVideoEmbedPreset(req: operations.GetVideoEmbedPresetRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoEmbedPresetResponse>;
}
