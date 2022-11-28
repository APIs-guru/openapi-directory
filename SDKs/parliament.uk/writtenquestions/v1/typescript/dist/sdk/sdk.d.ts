import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://parliament.uk"];
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
     * getApiDailyreportsDailyreports - Returns a list of daily reports
    **/
    getApiDailyreportsDailyreports(req: operations.GetApiDailyreportsDailyreportsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiDailyreportsDailyreportsResponse>;
    /**
     * getApiWrittenquestionsQuestions - Returns a list of written questions
    **/
    getApiWrittenquestionsQuestions(req: operations.GetApiWrittenquestionsQuestionsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiWrittenquestionsQuestionsResponse>;
    /**
     * getApiWrittenquestionsQuestionsDateUin - Returns a written question
    **/
    getApiWrittenquestionsQuestionsDateUin(req: operations.GetApiWrittenquestionsQuestionsDateUinRequest, config?: AxiosRequestConfig): Promise<operations.GetApiWrittenquestionsQuestionsDateUinResponse>;
    /**
     * getApiWrittenquestionsQuestionsId - Returns a written question
    **/
    getApiWrittenquestionsQuestionsId(req: operations.GetApiWrittenquestionsQuestionsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiWrittenquestionsQuestionsIdResponse>;
    /**
     * getApiWrittenstatementsStatements - Returns a list of written statements
    **/
    getApiWrittenstatementsStatements(req: operations.GetApiWrittenstatementsStatementsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiWrittenstatementsStatementsResponse>;
    /**
     * getApiWrittenstatementsStatementsDateUin - Returns a written statemnet
    **/
    getApiWrittenstatementsStatementsDateUin(req: operations.GetApiWrittenstatementsStatementsDateUinRequest, config?: AxiosRequestConfig): Promise<operations.GetApiWrittenstatementsStatementsDateUinResponse>;
    /**
     * getApiWrittenstatementsStatementsId - Returns a written statement
    **/
    getApiWrittenstatementsStatementsId(req: operations.GetApiWrittenstatementsStatementsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiWrittenstatementsStatementsIdResponse>;
}
export {};
