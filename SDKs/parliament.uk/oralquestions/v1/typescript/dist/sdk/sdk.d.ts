import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://oralquestionsandmotions-api.parliament.uk", "https://oralquestionsandmotions-api.parliament.uk"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getEarlyDayMotionsList - Returns a list of Early Day Motions
     *
     * Get a list of Early Day Motions which meet the specified criteria. Only supports Published and Withdrawn status.
    **/
    getEarlyDayMotionsList(req: operations.GetEarlyDayMotionsListRequest, config?: AxiosRequestConfig): Promise<operations.GetEarlyDayMotionsListResponse>;
    /**
     * publishedEarlyDayMotionGet - Returns a single Early Day Motion by ID
     *
     * Get a single Early Day Motion which has the ID specified.
    **/
    publishedEarlyDayMotionGet(req: operations.PublishedEarlyDayMotionGetRequest, config?: AxiosRequestConfig): Promise<operations.PublishedEarlyDayMotionGetResponse>;
    /**
     * publishedOralQuestionTimeGet - Returns a list of oral question times
     *
     * A list of oral question times meeting the specified criteria.
    **/
    publishedOralQuestionTimeGet(req: operations.PublishedOralQuestionTimeGetRequest, config?: AxiosRequestConfig): Promise<operations.PublishedOralQuestionTimeGetResponse>;
    /**
     * publishedOralQuestionGet - Returns a list of oral questions
     *
     * A list of oral questions meeting the specified criteria.
    **/
    publishedOralQuestionGet(req: operations.PublishedOralQuestionGetRequest, config?: AxiosRequestConfig): Promise<operations.PublishedOralQuestionGetResponse>;
}
export {};
