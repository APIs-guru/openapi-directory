import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class VideosEmbedPrivacy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addVideoPrivacyDomain - Permit a video to be embedded on a domain
     *
     * If domain privacy is enabled for this video, this method permits the video to be embedded on the specified domain.
    **/
    addVideoPrivacyDomain(req: operations.AddVideoPrivacyDomainRequest, config?: AxiosRequestConfig): Promise<operations.AddVideoPrivacyDomainResponse>;
    /**
     * deleteVideoPrivacyDomain - Restrict a video from being embedded on a domain
    **/
    deleteVideoPrivacyDomain(req: operations.DeleteVideoPrivacyDomainRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVideoPrivacyDomainResponse>;
    /**
     * getVideoPrivacyDomains - Get all the domains on which a video can be embedded
    **/
    getVideoPrivacyDomains(req: operations.GetVideoPrivacyDomainsRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoPrivacyDomainsResponse>;
}
