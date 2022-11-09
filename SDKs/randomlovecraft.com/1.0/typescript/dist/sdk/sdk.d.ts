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
    GetBooks(config?: AxiosRequestConfig): Promise<operations.GetBooksResponse>;
    GetSentences(req: operations.GetSentencesRequest, config?: AxiosRequestConfig): Promise<operations.GetSentencesResponse>;
    GetSentencesFromBook(req: operations.GetSentencesFromBookRequest, config?: AxiosRequestConfig): Promise<operations.GetSentencesFromBookResponse>;
    GetSpecificSentence(req: operations.GetSpecificSentenceRequest, config?: AxiosRequestConfig): Promise<operations.GetSpecificSentenceResponse>;
}
export {};
