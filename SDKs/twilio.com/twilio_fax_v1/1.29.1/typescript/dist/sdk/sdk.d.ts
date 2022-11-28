import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://fax.twilio.com"];
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
     * deleteFax - Delete a specific fax and its associated media.
    **/
    deleteFax(req: operations.DeleteFaxRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFaxResponse>;
    /**
     * deleteFaxMedia - Delete a specific fax media instance.
    **/
    deleteFaxMedia(req: operations.DeleteFaxMediaRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFaxMediaResponse>;
    /**
     * fetchFax - Fetch a specific fax.
    **/
    fetchFax(req: operations.FetchFaxRequest, config?: AxiosRequestConfig): Promise<operations.FetchFaxResponse>;
    /**
     * fetchFaxMedia - Fetch a specific fax media instance.
    **/
    fetchFaxMedia(req: operations.FetchFaxMediaRequest, config?: AxiosRequestConfig): Promise<operations.FetchFaxMediaResponse>;
    /**
     * listFax - Retrieve a list of all faxes.
    **/
    listFax(req: operations.ListFaxRequest, config?: AxiosRequestConfig): Promise<operations.ListFaxResponse>;
    /**
     * listFaxMedia - Retrieve a list of all fax media instances for the specified fax.
    **/
    listFaxMedia(req: operations.ListFaxMediaRequest, config?: AxiosRequestConfig): Promise<operations.ListFaxMediaResponse>;
}
export {};
