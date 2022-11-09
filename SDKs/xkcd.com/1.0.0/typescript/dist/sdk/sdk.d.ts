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
    GetComicIdInfo0Json(req: operations.GetComicIdInfo0JsonRequest, config?: AxiosRequestConfig): Promise<operations.GetComicIdInfo0JsonResponse>;
    GetInfo0Json(config?: AxiosRequestConfig): Promise<operations.GetInfo0JsonResponse>;
}
export {};
