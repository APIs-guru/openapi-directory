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
    DeleteFax(req: operations.DeleteFaxRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFaxResponse>;
    DeleteFaxMedia(req: operations.DeleteFaxMediaRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFaxMediaResponse>;
    FetchFax(req: operations.FetchFaxRequest, config?: AxiosRequestConfig): Promise<operations.FetchFaxResponse>;
    FetchFaxMedia(req: operations.FetchFaxMediaRequest, config?: AxiosRequestConfig): Promise<operations.FetchFaxMediaResponse>;
    ListFax(req: operations.ListFaxRequest, config?: AxiosRequestConfig): Promise<operations.ListFaxResponse>;
    ListFaxMedia(req: operations.ListFaxMediaRequest, config?: AxiosRequestConfig): Promise<operations.ListFaxMediaResponse>;
}
export {};
