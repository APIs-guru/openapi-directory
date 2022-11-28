import { AxiosInstance } from "axios";
import { Facilities } from "./facilities";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://sandbox-api.va.gov/services/va_facilities/{version}", "https://api.va.gov/services/va_facilities/{version}"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    facilities: Facilities;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
