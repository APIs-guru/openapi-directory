import { AxiosInstance } from "axios";
import { Developers } from "./developers";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://analytics.redeal.io/api/1.0.0"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    developers: Developers;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
