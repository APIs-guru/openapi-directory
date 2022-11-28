import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AlbumsCustomAlbumThumbnails {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createAlbumCustomThumb - Add a custom uploaded thumbnail
    **/
    createAlbumCustomThumb(req: operations.CreateAlbumCustomThumbRequest, config?: AxiosRequestConfig): Promise<operations.CreateAlbumCustomThumbResponse>;
    /**
     * deleteAlbumCustomThumbnail - Remove a custom uploaded album thumbnail
     *
     * This method removes a custom uploaded thumbnail from the specified album.
    **/
    deleteAlbumCustomThumbnail(req: operations.DeleteAlbumCustomThumbnailRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAlbumCustomThumbnailResponse>;
    /**
     * getAlbumCustomThumbnail - Get a specific custom uploaded album thumbnail
    **/
    getAlbumCustomThumbnail(req: operations.GetAlbumCustomThumbnailRequest, config?: AxiosRequestConfig): Promise<operations.GetAlbumCustomThumbnailResponse>;
    /**
     * getAlbumCustomThumbs - Get all the custom upload thumbnails of an album
    **/
    getAlbumCustomThumbs(req: operations.GetAlbumCustomThumbsRequest, config?: AxiosRequestConfig): Promise<operations.GetAlbumCustomThumbsResponse>;
    /**
     * replaceAlbumCustomThumb - Replace a custom uploaded album thumbnail
    **/
    replaceAlbumCustomThumb(req: operations.ReplaceAlbumCustomThumbRequest, config?: AxiosRequestConfig): Promise<operations.ReplaceAlbumCustomThumbResponse>;
}
