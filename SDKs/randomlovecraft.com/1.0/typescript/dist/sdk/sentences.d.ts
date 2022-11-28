import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Sentences {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getSentences - A random sentence
    **/
    getSentences(req: operations.GetSentencesRequest, config?: AxiosRequestConfig): Promise<operations.GetSentencesResponse>;
    /**
     * getSentencesFromBook - Random sentences from a specific book
    **/
    getSentencesFromBook(req: operations.GetSentencesFromBookRequest, config?: AxiosRequestConfig): Promise<operations.GetSentencesFromBookResponse>;
    /**
     * getSpecificSentence - A specific sentence
    **/
    getSpecificSentence(req: operations.GetSpecificSentenceRequest, config?: AxiosRequestConfig): Promise<operations.GetSpecificSentenceResponse>;
}
