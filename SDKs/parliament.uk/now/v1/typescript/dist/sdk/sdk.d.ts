import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://parliament.uk"];
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
     * getMessage - Return the current message by annunciator type
    **/
    getMessage(req: operations.GetMessageRequest, config?: AxiosRequestConfig): Promise<operations.GetMessageResponse>;
    /**
     * getSpecificMessage - Return the most recent message by annunciator after date time specified
    **/
    getSpecificMessage(req: operations.GetSpecificMessageRequest, config?: AxiosRequestConfig): Promise<operations.GetSpecificMessageResponse>;
}
export {};
