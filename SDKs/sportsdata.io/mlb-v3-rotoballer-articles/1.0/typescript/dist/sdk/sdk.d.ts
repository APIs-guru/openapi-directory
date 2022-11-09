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
    RotoballerArticles(req: operations.RotoballerArticlesRequest, config?: AxiosRequestConfig): Promise<operations.RotoballerArticlesResponse>;
    RotoballerArticlesByDate(req: operations.RotoballerArticlesByDateRequest, config?: AxiosRequestConfig): Promise<operations.RotoballerArticlesByDateResponse>;
    RotoballerArticlesByPlayer(req: operations.RotoballerArticlesByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.RotoballerArticlesByPlayerResponse>;
}
export {};
