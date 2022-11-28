import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://tsapi.net"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getSurveys - Returns a list of available Surveys
    **/
    getSurveys(config?: AxiosRequestConfig): Promise<operations.GetSurveysResponse>;
    /**
     * getSurveysSurveyIdInterviews - Fetches some interview records for a specific survey
    **/
    getSurveysSurveyIdInterviews(req: operations.GetSurveysSurveyIdInterviewsRequest, config?: AxiosRequestConfig): Promise<operations.GetSurveysSurveyIdInterviewsResponse>;
    /**
     * getSurveysSurveyIdMetadata - Fetches the metadata for a specific survey
    **/
    getSurveysSurveyIdMetadata(req: operations.GetSurveysSurveyIdMetadataRequest, config?: AxiosRequestConfig): Promise<operations.GetSurveysSurveyIdMetadataResponse>;
}
export {};
