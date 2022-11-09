import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * You may create your own question using this action. It takes a JSON
     * object containing a question and a collection of answers in the
     * form of choices.
    **/
    CreateANewQuestion(req: operations.CreateANewQuestionRequest, config?: AxiosRequestConfig): Promise<operations.CreateANewQuestionResponse>;
    ListAllQuestions(config?: AxiosRequestConfig): Promise<operations.ListAllQuestionsResponse>;
}
export {};
