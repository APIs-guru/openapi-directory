import { AxiosInstance } from "axios";
import { General } from "./general";
import { Tweets } from "./tweets";
import { Users } from "./users";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.twitter.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    general: General;
    tweets: Tweets;
    users: Users;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
