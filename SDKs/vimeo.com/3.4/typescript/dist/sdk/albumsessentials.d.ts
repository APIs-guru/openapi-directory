import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AlbumsEssentials {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createAlbum - Create an album
    **/
    createAlbum(req: operations.CreateAlbumRequest, config?: AxiosRequestConfig): Promise<operations.CreateAlbumResponse>;
    /**
     * createAlbumAlt1 - Create an album
    **/
    createAlbumAlt1(req: operations.CreateAlbumAlt1Request, config?: AxiosRequestConfig): Promise<operations.CreateAlbumAlt1Response>;
    /**
     * deleteAlbum - Delete an album
    **/
    deleteAlbum(req: operations.DeleteAlbumRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAlbumResponse>;
    /**
     * deleteAlbumAlt1 - Delete an album
    **/
    deleteAlbumAlt1(req: operations.DeleteAlbumAlt1Request, config?: AxiosRequestConfig): Promise<operations.DeleteAlbumAlt1Response>;
    /**
     * editAlbum - Edit an album
    **/
    editAlbum(req: operations.EditAlbumRequest, config?: AxiosRequestConfig): Promise<operations.EditAlbumResponse>;
    /**
     * editAlbumAlt1 - Edit an album
    **/
    editAlbumAlt1(req: operations.EditAlbumAlt1Request, config?: AxiosRequestConfig): Promise<operations.EditAlbumAlt1Response>;
    /**
     * getAlbum - Get a specific album
    **/
    getAlbum(req: operations.GetAlbumRequest, config?: AxiosRequestConfig): Promise<operations.GetAlbumResponse>;
    /**
     * getAlbumAlt1 - Get a specific album
    **/
    getAlbumAlt1(req: operations.GetAlbumAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetAlbumAlt1Response>;
    /**
     * getAlbums - Get all the albums that belong to a user
    **/
    getAlbums(req: operations.GetAlbumsRequest, config?: AxiosRequestConfig): Promise<operations.GetAlbumsResponse>;
    /**
     * getAlbumsAlt1 - Get all the albums that belong to a user
    **/
    getAlbumsAlt1(req: operations.GetAlbumsAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetAlbumsAlt1Response>;
}
