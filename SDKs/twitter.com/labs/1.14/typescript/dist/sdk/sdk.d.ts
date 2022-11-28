import { AxiosInstance } from "axios";
import { General } from "./general";
import { Rules } from "./rules";
import { Tweets } from "./tweets";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.twitter.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    general: General;
    rules: Rules;
    tweets: Tweets;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
