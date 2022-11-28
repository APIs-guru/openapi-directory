import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://polls.apiblueprint.org"];
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
     * createANewQuestion - Create a New Question
     *
     * You may create your own question using this action. It takes a JSON
     * object containing a question and a collection of answers in the
     * form of choices.
    **/
    createANewQuestion(req: operations.CreateANewQuestionRequest, config?: AxiosRequestConfig): Promise<operations.CreateANewQuestionResponse>;
    /**
     * listAllQuestions - List All Questions
    **/
    listAllQuestions(config?: AxiosRequestConfig): Promise<operations.ListAllQuestionsResponse>;
}
export {};
