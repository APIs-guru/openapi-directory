import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class LanguagePrediction {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * intentMultipart - Prediction for Intent
     *
     * Returns an intent prediction for the given string.
    **/
    intentMultipart(req: operations.IntentMultipartRequest, config?: AxiosRequestConfig): Promise<operations.IntentMultipartResponse>;
    /**
     * sentimentMultipart - Prediction for Sentiment
     *
     * Returns a sentiment prediction for the given string.
    **/
    sentimentMultipart(req: operations.SentimentMultipartRequest, config?: AxiosRequestConfig): Promise<operations.SentimentMultipartResponse>;
}
