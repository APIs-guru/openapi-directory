import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://api.sportsdata.io", "https://api.sportsdata.io", "http://azure-api.sportsdata.io", "https://azure-api.sportsdata.io"];
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
     * rotoballerArticles - RotoBaller Articles
    **/
    rotoballerArticles(req: operations.RotoballerArticlesRequest, config?: AxiosRequestConfig): Promise<operations.RotoballerArticlesResponse>;
    /**
     * rotoballerArticlesByDate - RotoBaller Articles by Date
    **/
    rotoballerArticlesByDate(req: operations.RotoballerArticlesByDateRequest, config?: AxiosRequestConfig): Promise<operations.RotoballerArticlesByDateResponse>;
    /**
     * rotoballerArticlesByPlayer - RotoBaller Articles by Player
    **/
    rotoballerArticlesByPlayer(req: operations.RotoballerArticlesByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.RotoballerArticlesByPlayerResponse>;
}
export {};
