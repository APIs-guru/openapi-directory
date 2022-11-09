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
    DeleteApp(req: operations.DeleteAppRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppResponse>;
    FetchApp(req: operations.FetchAppRequest, config?: AxiosRequestConfig): Promise<operations.FetchAppResponse>;
    FetchDevice(req: operations.FetchDeviceRequest, config?: AxiosRequestConfig): Promise<operations.FetchDeviceResponse>;
    ListApp(req: operations.ListAppRequest, config?: AxiosRequestConfig): Promise<operations.ListAppResponse>;
    ListDevice(req: operations.ListDeviceRequest, config?: AxiosRequestConfig): Promise<operations.ListDeviceResponse>;
    UpdateDevice(req: operations.UpdateDeviceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceResponse>;
}
export {};
