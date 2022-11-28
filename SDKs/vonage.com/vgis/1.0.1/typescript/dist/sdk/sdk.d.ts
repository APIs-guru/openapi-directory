import { AxiosInstance } from "axios";
import { Accounts } from "./accounts";
import { Calls } from "./calls";
import { Events } from "./events";
import { Users } from "./users";
import { Webhooks } from "./webhooks";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.vonage.com/t/vbc.prod/vis/v1"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    accounts: Accounts;
    calls: Calls;
    events: Events;
    users: Users;
    webhooks: Webhooks;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
