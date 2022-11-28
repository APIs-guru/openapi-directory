import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AlbumsCustomAlbumLogos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createAlbumLogo - Add a custom album logo
    **/
    createAlbumLogo(req: operations.CreateAlbumLogoRequest, config?: AxiosRequestConfig): Promise<operations.CreateAlbumLogoResponse>;
    /**
     * deleteAlbumLogo - Remove a custom album logo
     *
     * This method removes a custom logo from the specified album.
    **/
    deleteAlbumLogo(req: operations.DeleteAlbumLogoRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAlbumLogoResponse>;
    /**
     * getAlbumLogo - Get a specific custom album logo
    **/
    getAlbumLogo(req: operations.GetAlbumLogoRequest, config?: AxiosRequestConfig): Promise<operations.GetAlbumLogoResponse>;
    /**
     * getAlbumLogos - Get all the custom logos of an album
    **/
    getAlbumLogos(req: operations.GetAlbumLogosRequest, config?: AxiosRequestConfig): Promise<operations.GetAlbumLogosResponse>;
    /**
     * replaceAlbumLogo - Replace a custom album logo
    **/
    replaceAlbumLogo(req: operations.ReplaceAlbumLogoRequest, config?: AxiosRequestConfig): Promise<operations.ReplaceAlbumLogoResponse>;
}
