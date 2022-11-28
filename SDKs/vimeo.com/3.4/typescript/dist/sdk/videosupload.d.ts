import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class VideosUpload {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * completeStreamingUpload - Complete a user's streaming upload
    **/
    completeStreamingUpload(req: operations.CompleteStreamingUploadRequest, config?: AxiosRequestConfig): Promise<operations.CompleteStreamingUploadResponse>;
    /**
     * getUploadAttempt - Get a user's upload attempt
    **/
    getUploadAttempt(req: operations.GetUploadAttemptRequest, config?: AxiosRequestConfig): Promise<operations.GetUploadAttemptResponse>;
    /**
     * uploadVideo - Upload a video
     *
     * Begin the video upload process. For more information, see our [upload documentation](https://developer.vimeo.com/api/upload/videos).
    **/
    uploadVideo(req: operations.UploadVideoRequest, config?: AxiosRequestConfig): Promise<operations.UploadVideoResponse>;
    /**
     * uploadVideoAlt1 - Upload a video
     *
     * Begin the video upload process. For more information, see our [upload documentation](https://developer.vimeo.com/api/upload/videos).
    **/
    uploadVideoAlt1(req: operations.UploadVideoAlt1Request, config?: AxiosRequestConfig): Promise<operations.UploadVideoAlt1Response>;
}
