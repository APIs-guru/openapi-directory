import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://xkcd.com/"];
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
     * getComicIdInfo0Json - Fetch comics and metadata  by comic id.
     *
    **/
    getComicIdInfo0Json(req: operations.GetComicIdInfo0JsonRequest, config?: AxiosRequestConfig): Promise<operations.GetComicIdInfo0JsonResponse>;
    /**
     * getInfo0Json - Fetch current comic and metadata.
     *
    **/
    getInfo0Json(config?: AxiosRequestConfig): Promise<operations.GetInfo0JsonResponse>;
}
export {};
