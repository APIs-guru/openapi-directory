import { AxiosInstance } from "axios";
import { Files } from "./files";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.xero.com/files.xro/1.0/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    files: Files;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
