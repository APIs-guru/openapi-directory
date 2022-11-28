import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://trunking.twilio.com"];
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
    createCredentialList(req: operations.CreateCredentialListRequest, config?: AxiosRequestConfig): Promise<operations.CreateCredentialListResponse>;
    /**
     * createIpAccessControlList - Associate an IP Access Control List with a Trunk
    **/
    createIpAccessControlList(req: operations.CreateIpAccessControlListRequest, config?: AxiosRequestConfig): Promise<operations.CreateIpAccessControlListResponse>;
    createOriginationUrl(req: operations.CreateOriginationUrlRequest, config?: AxiosRequestConfig): Promise<operations.CreateOriginationUrlResponse>;
    createPhoneNumber(req: operations.CreatePhoneNumberRequest, config?: AxiosRequestConfig): Promise<operations.CreatePhoneNumberResponse>;
    createTrunk(req: operations.CreateTrunkRequest, config?: AxiosRequestConfig): Promise<operations.CreateTrunkResponse>;
    deleteCredentialList(req: operations.DeleteCredentialListRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCredentialListResponse>;
    /**
     * deleteIpAccessControlList - Remove an associated IP Access Control List from a Trunk
    **/
    deleteIpAccessControlList(req: operations.DeleteIpAccessControlListRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIpAccessControlListResponse>;
    deleteOriginationUrl(req: operations.DeleteOriginationUrlRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOriginationUrlResponse>;
    deletePhoneNumber(req: operations.DeletePhoneNumberRequest, config?: AxiosRequestConfig): Promise<operations.DeletePhoneNumberResponse>;
    deleteTrunk(req: operations.DeleteTrunkRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTrunkResponse>;
    fetchCredentialList(req: operations.FetchCredentialListRequest, config?: AxiosRequestConfig): Promise<operations.FetchCredentialListResponse>;
    fetchIpAccessControlList(req: operations.FetchIpAccessControlListRequest, config?: AxiosRequestConfig): Promise<operations.FetchIpAccessControlListResponse>;
    fetchOriginationUrl(req: operations.FetchOriginationUrlRequest, config?: AxiosRequestConfig): Promise<operations.FetchOriginationUrlResponse>;
    fetchPhoneNumber(req: operations.FetchPhoneNumberRequest, config?: AxiosRequestConfig): Promise<operations.FetchPhoneNumberResponse>;
    fetchRecording(req: operations.FetchRecordingRequest, config?: AxiosRequestConfig): Promise<operations.FetchRecordingResponse>;
    fetchTrunk(req: operations.FetchTrunkRequest, config?: AxiosRequestConfig): Promise<operations.FetchTrunkResponse>;
    listCredentialList(req: operations.ListCredentialListRequest, config?: AxiosRequestConfig): Promise<operations.ListCredentialListResponse>;
    /**
     * listIpAccessControlList - List all IP Access Control Lists for a Trunk
    **/
    listIpAccessControlList(req: operations.ListIpAccessControlListRequest, config?: AxiosRequestConfig): Promise<operations.ListIpAccessControlListResponse>;
    listOriginationUrl(req: operations.ListOriginationUrlRequest, config?: AxiosRequestConfig): Promise<operations.ListOriginationUrlResponse>;
    listPhoneNumber(req: operations.ListPhoneNumberRequest, config?: AxiosRequestConfig): Promise<operations.ListPhoneNumberResponse>;
    listTrunk(req: operations.ListTrunkRequest, config?: AxiosRequestConfig): Promise<operations.ListTrunkResponse>;
    updateOriginationUrl(req: operations.UpdateOriginationUrlRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOriginationUrlResponse>;
    updateRecording(req: operations.UpdateRecordingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRecordingResponse>;
    updateTrunk(req: operations.UpdateTrunkRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTrunkResponse>;
}
export {};
