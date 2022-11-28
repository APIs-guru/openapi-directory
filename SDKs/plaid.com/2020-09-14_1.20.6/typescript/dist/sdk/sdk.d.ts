import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Plaid } from "./plaid";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://production.plaid.com", "https://development.plaid.com", "https://sandbox.plaid.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    plaid: Plaid;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
