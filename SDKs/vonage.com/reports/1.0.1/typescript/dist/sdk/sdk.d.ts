import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.vonage.com/t/vbc.prod/reports"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getCallLogs - Retrieve call logs for your account
     *
     * Retrieve call logs for your account
    **/
    getCallLogs(req: operations.GetCallLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetCallLogsResponse>;
}
export {};
