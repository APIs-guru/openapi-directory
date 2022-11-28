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
     * premiumNews - Premium News
    **/
    premiumNews(req: operations.PremiumNewsRequest, config?: AxiosRequestConfig): Promise<operations.PremiumNewsResponse>;
    /**
     * premiumNewsByDate - Premium News by Date
    **/
    premiumNewsByDate(req: operations.PremiumNewsByDateRequest, config?: AxiosRequestConfig): Promise<operations.PremiumNewsByDateResponse>;
    /**
     * premiumNewsByPlayer - Premium News by Player
    **/
    premiumNewsByPlayer(req: operations.PremiumNewsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.PremiumNewsByPlayerResponse>;
}
export {};
