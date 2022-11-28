import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://wheretocredit.com"];
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
     * getApi10Programs - Lists all supported frequent flyer programs.
    **/
    getApi10Programs(config?: AxiosRequestConfig): Promise<operations.GetApi10ProgramsResponse>;
    /**
     * postApi10Calculate - Calculates the number of miles earned for every frequent flyer program.
    **/
    postApi10Calculate(req: operations.PostApi10CalculateRequest, config?: AxiosRequestConfig): Promise<operations.PostApi10CalculateResponse>;
}
export {};
