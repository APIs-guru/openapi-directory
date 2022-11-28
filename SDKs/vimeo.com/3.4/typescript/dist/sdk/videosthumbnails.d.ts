import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class VideosThumbnails {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createVideoThumbnail - Add a video thumbnail
    **/
    createVideoThumbnail(req: operations.CreateVideoThumbnailRequest, config?: AxiosRequestConfig): Promise<operations.CreateVideoThumbnailResponse>;
    /**
     * createVideoThumbnailAlt1 - Add a video thumbnail
    **/
    createVideoThumbnailAlt1(req: operations.CreateVideoThumbnailAlt1Request, config?: AxiosRequestConfig): Promise<operations.CreateVideoThumbnailAlt1Response>;
    /**
     * deleteVideoThumbnail - Delete a video thumbnail
    **/
    deleteVideoThumbnail(req: operations.DeleteVideoThumbnailRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVideoThumbnailResponse>;
    /**
     * editVideoThumbnail - Edit a video thumbnail
    **/
    editVideoThumbnail(req: operations.EditVideoThumbnailRequest, config?: AxiosRequestConfig): Promise<operations.EditVideoThumbnailResponse>;
    /**
     * getVideoThumbnail - Get a video thumbnail
    **/
    getVideoThumbnail(req: operations.GetVideoThumbnailRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoThumbnailResponse>;
    /**
     * getVideoThumbnails - Get all the thumbnails of a video
    **/
    getVideoThumbnails(req: operations.GetVideoThumbnailsRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoThumbnailsResponse>;
    /**
     * getVideoThumbnailsAlt1 - Get all the thumbnails of a video
    **/
    getVideoThumbnailsAlt1(req: operations.GetVideoThumbnailsAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetVideoThumbnailsAlt1Response>;
}
