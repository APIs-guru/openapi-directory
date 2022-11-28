import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class WordList {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addWordsToWordList - Adds words to a WordList
    **/
    addWordsToWordList(req: operations.AddWordsToWordListRequest, config?: AxiosRequestConfig): Promise<operations.AddWordsToWordListResponse>;
    /**
     * deleteWordList - Deletes an existing WordList
    **/
    deleteWordList(req: operations.DeleteWordListRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWordListResponse>;
    /**
     * deleteWordsFromWordList - Removes words from a WordList
    **/
    deleteWordsFromWordList(req: operations.DeleteWordsFromWordListRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWordsFromWordListResponse>;
    /**
     * getWordListByPermalink - Fetches a WordList by ID
    **/
    getWordListByPermalink(req: operations.GetWordListByPermalinkRequest, config?: AxiosRequestConfig): Promise<operations.GetWordListByPermalinkResponse>;
    /**
     * getWordListWords - Fetches words in a WordList
    **/
    getWordListWords(req: operations.GetWordListWordsRequest, config?: AxiosRequestConfig): Promise<operations.GetWordListWordsResponse>;
    /**
     * updateWordList - Updates an existing WordList
    **/
    updateWordList(req: operations.UpdateWordListRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWordListResponse>;
}
