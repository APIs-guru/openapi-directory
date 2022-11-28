import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.vonage.com/t/vbc.prod/provisioning"];
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
     * accountCtrlGetAccountServicesByAccountId - Get account data by ID
    **/
    accountCtrlGetAccountServicesByAccountId(req: operations.AccountCtrlGetAccountServicesByAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.AccountCtrlGetAccountServicesByAccountIdResponse>;
    /**
     * accountCtrlGetLocationById - Get location data by account ID and location ID
    **/
    accountCtrlGetLocationById(req: operations.AccountCtrlGetLocationByIdRequest, config?: AxiosRequestConfig): Promise<operations.AccountCtrlGetLocationByIdResponse>;
    /**
     * accountCtrlGetLocationsByAccountId - Get account locations data by account ID
    **/
    accountCtrlGetLocationsByAccountId(req: operations.AccountCtrlGetLocationsByAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.AccountCtrlGetLocationsByAccountIdResponse>;
}
export {};
