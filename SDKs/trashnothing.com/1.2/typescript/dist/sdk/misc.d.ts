import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Misc {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * sendFeedback - Send feedback
     *
     * Allows users to send feedback about the trashnothing.com site or apps.
    **/
    sendFeedback(req: operations.SendFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.SendFeedbackResponse>;
}
