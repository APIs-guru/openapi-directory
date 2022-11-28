import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AlbumsAlbumVideos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addVideoToAlbum - Add a specific video to an album
    **/
    addVideoToAlbum(req: operations.AddVideoToAlbumRequest, config?: AxiosRequestConfig): Promise<operations.AddVideoToAlbumResponse>;
    /**
     * addVideoToAlbumAlt1 - Add a specific video to an album
    **/
    addVideoToAlbumAlt1(req: operations.AddVideoToAlbumAlt1Request, config?: AxiosRequestConfig): Promise<operations.AddVideoToAlbumAlt1Response>;
    /**
     * getAlbumVideo - Get a specific video in an album
     *
     * This method gets a single video from an album. You can use this method to determine whether the album contains the specified video.
    **/
    getAlbumVideo(req: operations.GetAlbumVideoRequest, config?: AxiosRequestConfig): Promise<operations.GetAlbumVideoResponse>;
    /**
     * getAlbumVideoAlt1 - Get a specific video in an album
     *
     * This method gets a single video from an album. You can use this method to determine whether the album contains the specified video.
    **/
    getAlbumVideoAlt1(req: operations.GetAlbumVideoAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetAlbumVideoAlt1Response>;
    /**
     * getAlbumVideos - Get all the videos in an album
    **/
    getAlbumVideos(req: operations.GetAlbumVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetAlbumVideosResponse>;
    /**
     * getAlbumVideosAlt1 - Get all the videos in an album
    **/
    getAlbumVideosAlt1(req: operations.GetAlbumVideosAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetAlbumVideosAlt1Response>;
    /**
     * removeVideoFromAlbum - Remove a video from an album
    **/
    removeVideoFromAlbum(req: operations.RemoveVideoFromAlbumRequest, config?: AxiosRequestConfig): Promise<operations.RemoveVideoFromAlbumResponse>;
    /**
     * removeVideoFromAlbumAlt1 - Remove a video from an album
    **/
    removeVideoFromAlbumAlt1(req: operations.RemoveVideoFromAlbumAlt1Request, config?: AxiosRequestConfig): Promise<operations.RemoveVideoFromAlbumAlt1Response>;
    /**
     * replaceVideosInAlbum - Replace all the videos in an album
     *
     * This method replaces all the existing videos in an album with one or more videos.
    **/
    replaceVideosInAlbum(req: operations.ReplaceVideosInAlbumRequest, config?: AxiosRequestConfig): Promise<operations.ReplaceVideosInAlbumResponse>;
    /**
     * replaceVideosInAlbumAlt1 - Replace all the videos in an album
     *
     * This method replaces all the existing videos in an album with one or more videos.
    **/
    replaceVideosInAlbumAlt1(req: operations.ReplaceVideosInAlbumAlt1Request, config?: AxiosRequestConfig): Promise<operations.ReplaceVideosInAlbumAlt1Response>;
    /**
     * setVideoAsAlbumThumbnail - Set a video as the album thumbnail
    **/
    setVideoAsAlbumThumbnail(req: operations.SetVideoAsAlbumThumbnailRequest, config?: AxiosRequestConfig): Promise<operations.SetVideoAsAlbumThumbnailResponse>;
    /**
     * setVideoAsAlbumThumbnailAlt1 - Set a video as the album thumbnail
    **/
    setVideoAsAlbumThumbnailAlt1(req: operations.SetVideoAsAlbumThumbnailAlt1Request, config?: AxiosRequestConfig): Promise<operations.SetVideoAsAlbumThumbnailAlt1Response>;
}
