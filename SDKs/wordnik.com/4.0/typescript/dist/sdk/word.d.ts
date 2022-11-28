import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Word {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAudio - Fetches audio metadata for a word.
     *
     * The metadata includes a time-expiring fileUrl which allows reading the audio file directly from the API.  Currently only audio pronunciations from the American Heritage Dictionary in mp3 format are supported.
    **/
    getAudio(req: operations.GetAudioRequest, config?: AxiosRequestConfig): Promise<operations.GetAudioResponse>;
    /**
     * getDefinitions - Return definitions for a word
    **/
    getDefinitions(req: operations.GetDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.GetDefinitionsResponse>;
    /**
     * getEtymologies - Fetches etymology data
    **/
    getEtymologies(req: operations.GetEtymologiesRequest, config?: AxiosRequestConfig): Promise<operations.GetEtymologiesResponse>;
    /**
     * getExamples - Returns examples for a word
    **/
    getExamples(req: operations.GetExamplesRequest, config?: AxiosRequestConfig): Promise<operations.GetExamplesResponse>;
    /**
     * getHyphenation - Returns syllable information for a word
    **/
    getHyphenation(req: operations.GetHyphenationRequest, config?: AxiosRequestConfig): Promise<operations.GetHyphenationResponse>;
    /**
     * getPhrases - Fetches bi-gram phrases for a word
    **/
    getPhrases(req: operations.GetPhrasesRequest, config?: AxiosRequestConfig): Promise<operations.GetPhrasesResponse>;
    /**
     * getRelatedWords - Given a word as a string, returns relationships from the Word Graph
    **/
    getRelatedWords(req: operations.GetRelatedWordsRequest, config?: AxiosRequestConfig): Promise<operations.GetRelatedWordsResponse>;
    /**
     * getScrabbleScore - Returns the Scrabble score for a word
    **/
    getScrabbleScore(req: operations.GetScrabbleScoreRequest, config?: AxiosRequestConfig): Promise<operations.GetScrabbleScoreResponse>;
    /**
     * getTextPronunciations - Returns text pronunciations for a given word
    **/
    getTextPronunciations(req: operations.GetTextPronunciationsRequest, config?: AxiosRequestConfig): Promise<operations.GetTextPronunciationsResponse>;
    /**
     * getTopExample - Returns a top example for a word
    **/
    getTopExample(req: operations.GetTopExampleRequest, config?: AxiosRequestConfig): Promise<operations.GetTopExampleResponse>;
    /**
     * getWordFrequency - Returns word usage over time
    **/
    getWordFrequency(req: operations.GetWordFrequencyRequest, config?: AxiosRequestConfig): Promise<operations.GetWordFrequencyResponse>;
}
