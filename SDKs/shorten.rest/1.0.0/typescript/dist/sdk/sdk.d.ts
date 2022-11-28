import { AxiosInstance } from "axios";
import { Alias } from "./alias";
import { Click } from "./click";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.shorten.rest"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    alias: Alias;
    click: Click;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
