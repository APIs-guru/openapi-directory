import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class LanguageModelDirectAccess {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getFamilyDetails - Get family details
     *
     * Fetches and outputs metadata for a family from the Tisane language models.
    **/
    getFamilyDetails(req: operations.GetFamilyDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetFamilyDetailsResponse>;
    /**
     * listFeatureValues - List feature values
     *
     * Lists feature values for a particular category of features. This allows obtaining all the values such as entity types, subtypes, abuse types and tags, and more.
     *
     * Returns the values as a JSON array of strings.
    **/
    listFeatureValues(req: operations.ListFeatureValuesRequest, config?: AxiosRequestConfig): Promise<operations.ListFeatureValuesResponse>;
    /**
     * listHypernyms - List hypernyms
     *
     * Lists all hypernyms related to a family. A hypernym is a parent concent. E.g. "vehicle" is a hypernym of "truck".
    **/
    listHypernyms(req: operations.ListHypernymsRequest, config?: AxiosRequestConfig): Promise<operations.ListHypernymsResponse>;
    /**
     * listHyponyms - List hyponyms
     *
     * Lists all hyponyms related to a family. A hyponym is a child concent. E.g. "truck" is a hypernym of "vehicle".
    **/
    listHyponyms(req: operations.ListHyponymsRequest, config?: AxiosRequestConfig): Promise<operations.ListHyponymsResponse>;
    /**
     * listInflectedForms - List inflected forms
     *
     * List inflected forms
    **/
    listInflectedForms(req: operations.ListInflectedFormsRequest, config?: AxiosRequestConfig): Promise<operations.ListInflectedFormsResponse>;
    /**
     * listWordSenses - List word senses
     *
     * Fetches and outputs all senses related to a word.
    **/
    listWordSenses(req: operations.ListWordSensesRequest, config?: AxiosRequestConfig): Promise<operations.ListWordSensesResponse>;
}
