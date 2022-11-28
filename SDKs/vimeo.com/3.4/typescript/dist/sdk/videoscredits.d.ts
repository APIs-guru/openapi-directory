import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class VideosCredits {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addVideoCredit - Credit a user in a video
    **/
    addVideoCredit(req: operations.AddVideoCreditRequest, config?: AxiosRequestConfig): Promise<operations.AddVideoCreditResponse>;
    /**
     * addVideoCreditAlt1 - Credit a user in a video
    **/
    addVideoCreditAlt1(req: operations.AddVideoCreditAlt1Request, config?: AxiosRequestConfig): Promise<operations.AddVideoCreditAlt1Response>;
    /**
     * deleteVideoCredit - Delete a credit for a user in a video
    **/
    deleteVideoCredit(req: operations.DeleteVideoCreditRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVideoCreditResponse>;
    /**
     * editVideoCredit - Edit a credit for a user in a video
    **/
    editVideoCredit(req: operations.EditVideoCreditRequest, config?: AxiosRequestConfig): Promise<operations.EditVideoCreditResponse>;
    /**
     * getVideoCredit - Get a specific credited user in a video
    **/
    getVideoCredit(req: operations.GetVideoCreditRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoCreditResponse>;
    /**
     * getVideoCredits - Get all the credited users in a video
    **/
    getVideoCredits(req: operations.GetVideoCreditsRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoCreditsResponse>;
    /**
     * getVideoCreditsAlt1 - Get all the credited users in a video
    **/
    getVideoCreditsAlt1(req: operations.GetVideoCreditsAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetVideoCreditsAlt1Response>;
}
