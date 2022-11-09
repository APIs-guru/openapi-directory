import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    AccountCtrlGetAccountServicesByAccountId(req: operations.AccountCtrlGetAccountServicesByAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.AccountCtrlGetAccountServicesByAccountIdResponse>;
    AccountCtrlGetLocationById(req: operations.AccountCtrlGetLocationByIdRequest, config?: AxiosRequestConfig): Promise<operations.AccountCtrlGetLocationByIdResponse>;
    AccountCtrlGetLocationsByAccountId(req: operations.AccountCtrlGetLocationsByAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.AccountCtrlGetLocationsByAccountIdResponse>;
}
export {};
