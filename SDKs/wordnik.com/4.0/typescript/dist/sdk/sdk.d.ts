import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    AddWordsToWordList(req: operations.AddWordsToWordListRequest, config?: AxiosRequestConfig): Promise<operations.AddWordsToWordListResponse>;
    Authenticate(req: operations.AuthenticateRequest, config?: AxiosRequestConfig): Promise<operations.AuthenticateResponse>;
    AuthenticatePost(req: operations.AuthenticatePostRequest, config?: AxiosRequestConfig): Promise<operations.AuthenticatePostResponse>;
    CreateWordList(req: operations.CreateWordListRequest, config?: AxiosRequestConfig): Promise<operations.CreateWordListResponse>;
    DeleteWordList(req: operations.DeleteWordListRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWordListResponse>;
    DeleteWordsFromWordList(req: operations.DeleteWordsFromWordListRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWordsFromWordListResponse>;
    GetApiTokenStatus(req: operations.GetApiTokenStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetApiTokenStatusResponse>;
    /**
     * The metadata includes a time-expiring fileUrl which allows reading the audio file directly from the API.  Currently only audio pronunciations from the American Heritage Dictionary in mp3 format are supported.
    **/
    GetAudio(req: operations.GetAudioRequest, config?: AxiosRequestConfig): Promise<operations.GetAudioResponse>;
    GetDefinitions(req: operations.GetDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.GetDefinitionsResponse>;
    GetEtymologies(req: operations.GetEtymologiesRequest, config?: AxiosRequestConfig): Promise<operations.GetEtymologiesResponse>;
    GetExamples(req: operations.GetExamplesRequest, config?: AxiosRequestConfig): Promise<operations.GetExamplesResponse>;
    GetHyphenation(req: operations.GetHyphenationRequest, config?: AxiosRequestConfig): Promise<operations.GetHyphenationResponse>;
    /**
     * Requires a valid auth_token to be set.
    **/
    GetLoggedInUser(req: operations.GetLoggedInUserRequest, config?: AxiosRequestConfig): Promise<operations.GetLoggedInUserResponse>;
    GetPhrases(req: operations.GetPhrasesRequest, config?: AxiosRequestConfig): Promise<operations.GetPhrasesResponse>;
    GetRandomWord(req: operations.GetRandomWordRequest, config?: AxiosRequestConfig): Promise<operations.GetRandomWordResponse>;
    GetRandomWords(req: operations.GetRandomWordsRequest, config?: AxiosRequestConfig): Promise<operations.GetRandomWordsResponse>;
    GetRelatedWords(req: operations.GetRelatedWordsRequest, config?: AxiosRequestConfig): Promise<operations.GetRelatedWordsResponse>;
    GetScrabbleScore(req: operations.GetScrabbleScoreRequest, config?: AxiosRequestConfig): Promise<operations.GetScrabbleScoreResponse>;
    GetTextPronunciations(req: operations.GetTextPronunciationsRequest, config?: AxiosRequestConfig): Promise<operations.GetTextPronunciationsResponse>;
    GetTopExample(req: operations.GetTopExampleRequest, config?: AxiosRequestConfig): Promise<operations.GetTopExampleResponse>;
    GetWordFrequency(req: operations.GetWordFrequencyRequest, config?: AxiosRequestConfig): Promise<operations.GetWordFrequencyResponse>;
    GetWordListByPermalink(req: operations.GetWordListByPermalinkRequest, config?: AxiosRequestConfig): Promise<operations.GetWordListByPermalinkResponse>;
    GetWordListWords(req: operations.GetWordListWordsRequest, config?: AxiosRequestConfig): Promise<operations.GetWordListWordsResponse>;
    GetWordListsForLoggedInUser(req: operations.GetWordListsForLoggedInUserRequest, config?: AxiosRequestConfig): Promise<operations.GetWordListsForLoggedInUserResponse>;
    GetWordOfTheDay(req: operations.GetWordOfTheDayRequest, config?: AxiosRequestConfig): Promise<operations.GetWordOfTheDayResponse>;
    ReverseDictionary(req: operations.ReverseDictionaryRequest, config?: AxiosRequestConfig): Promise<operations.ReverseDictionaryResponse>;
    SearchWords(req: operations.SearchWordsRequest, config?: AxiosRequestConfig): Promise<operations.SearchWordsResponse>;
    UpdateWordList(req: operations.UpdateWordListRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWordListResponse>;
}
export {};
