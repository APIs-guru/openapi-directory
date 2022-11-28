import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://content.twilio.com"];
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
     * deleteContent - Deletes a Content resource
    **/
    deleteContent(req: operations.DeleteContentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteContentResponse>;
    /**
     * fetchContent - Fetch a Content resource by its unique Content Sid
    **/
    fetchContent(req: operations.FetchContentRequest, config?: AxiosRequestConfig): Promise<operations.FetchContentResponse>;
    /**
     * listContent - Retrieve a list of Contents belonging to the account used to make the request
    **/
    listContent(req: operations.ListContentRequest, config?: AxiosRequestConfig): Promise<operations.ListContentResponse>;
}
export {};
