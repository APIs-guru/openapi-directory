import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class VideosVersions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createVideoVersion - Add a version to a video
    **/
    createVideoVersion(req: operations.CreateVideoVersionRequest, config?: AxiosRequestConfig): Promise<operations.CreateVideoVersionResponse>;
}
