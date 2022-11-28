import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class EmbedPresetsEssentials {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * editEmbedPreset - Edit an embed preset
    **/
    editEmbedPreset(req: operations.EditEmbedPresetRequest, config?: AxiosRequestConfig): Promise<operations.EditEmbedPresetResponse>;
    /**
     * editEmbedPresetAlt1 - Edit an embed preset
    **/
    editEmbedPresetAlt1(req: operations.EditEmbedPresetAlt1Request, config?: AxiosRequestConfig): Promise<operations.EditEmbedPresetAlt1Response>;
    /**
     * getEmbedPreset - Get a specific embed preset
    **/
    getEmbedPreset(req: operations.GetEmbedPresetRequest, config?: AxiosRequestConfig): Promise<operations.GetEmbedPresetResponse>;
    /**
     * getEmbedPresetAlt1 - Get a specific embed preset
    **/
    getEmbedPresetAlt1(req: operations.GetEmbedPresetAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetEmbedPresetAlt1Response>;
    /**
     * getEmbedPresets - Get all the embed presets that a user has created
    **/
    getEmbedPresets(req: operations.GetEmbedPresetsRequest, config?: AxiosRequestConfig): Promise<operations.GetEmbedPresetsResponse>;
    /**
     * getEmbedPresetsAlt1 - Get all the embed presets that a user has created
    **/
    getEmbedPresetsAlt1(req: operations.GetEmbedPresetsAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetEmbedPresetsAlt1Response>;
}
