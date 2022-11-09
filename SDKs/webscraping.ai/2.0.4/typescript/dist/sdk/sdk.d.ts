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
    /**
     * Always returns JSON
    **/
    Account(config?: AxiosRequestConfig): Promise<operations.AccountResponse>;
    /**
     * Returns just HTML on success, JSON on error
    **/
    GetHtml(req: operations.GetHtmlRequest, config?: AxiosRequestConfig): Promise<operations.GetHtmlResponse>;
    /**
     * Returns just HTML on success, JSON on error
    **/
    GetSelected(req: operations.GetSelectedRequest, config?: AxiosRequestConfig): Promise<operations.GetSelectedResponse>;
    /**
     * Always returns JSON
    **/
    GetSelectedMultiple(req: operations.GetSelectedMultipleRequest, config?: AxiosRequestConfig): Promise<operations.GetSelectedMultipleResponse>;
}
export {};
