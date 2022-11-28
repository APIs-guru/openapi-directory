import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://voice.twilio.com"];
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
    createByocTrunk(req: operations.CreateByocTrunkRequest, config?: AxiosRequestConfig): Promise<operations.CreateByocTrunkResponse>;
    createConnectionPolicy(req: operations.CreateConnectionPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CreateConnectionPolicyResponse>;
    createConnectionPolicyTarget(req: operations.CreateConnectionPolicyTargetRequest, config?: AxiosRequestConfig): Promise<operations.CreateConnectionPolicyTargetResponse>;
    /**
     * createDialingPermissionsCountryBulkUpdate - Create a bulk update request to change voice dialing country permissions of one or more countries identified by the corresponding [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
    **/
    createDialingPermissionsCountryBulkUpdate(req: operations.CreateDialingPermissionsCountryBulkUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CreateDialingPermissionsCountryBulkUpdateResponse>;
    createIpRecord(req: operations.CreateIpRecordRequest, config?: AxiosRequestConfig): Promise<operations.CreateIpRecordResponse>;
    createSourceIpMapping(req: operations.CreateSourceIpMappingRequest, config?: AxiosRequestConfig): Promise<operations.CreateSourceIpMappingResponse>;
    /**
     * deleteArchivedCall - Delete an archived call record from Bulk Export. Note: this does not also delete the record from the Voice API.
    **/
    deleteArchivedCall(req: operations.DeleteArchivedCallRequest, config?: AxiosRequestConfig): Promise<operations.DeleteArchivedCallResponse>;
    deleteByocTrunk(req: operations.DeleteByocTrunkRequest, config?: AxiosRequestConfig): Promise<operations.DeleteByocTrunkResponse>;
    deleteConnectionPolicy(req: operations.DeleteConnectionPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectionPolicyResponse>;
    deleteConnectionPolicyTarget(req: operations.DeleteConnectionPolicyTargetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectionPolicyTargetResponse>;
    deleteIpRecord(req: operations.DeleteIpRecordRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIpRecordResponse>;
    deleteSourceIpMapping(req: operations.DeleteSourceIpMappingRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSourceIpMappingResponse>;
    fetchByocTrunk(req: operations.FetchByocTrunkRequest, config?: AxiosRequestConfig): Promise<operations.FetchByocTrunkResponse>;
    fetchConnectionPolicy(req: operations.FetchConnectionPolicyRequest, config?: AxiosRequestConfig): Promise<operations.FetchConnectionPolicyResponse>;
    fetchConnectionPolicyTarget(req: operations.FetchConnectionPolicyTargetRequest, config?: AxiosRequestConfig): Promise<operations.FetchConnectionPolicyTargetResponse>;
    /**
     * fetchDialingPermissionsCountry - Retrieve voice dialing country permissions identified by the given ISO country code
    **/
    fetchDialingPermissionsCountry(req: operations.FetchDialingPermissionsCountryRequest, config?: AxiosRequestConfig): Promise<operations.FetchDialingPermissionsCountryResponse>;
    /**
     * fetchDialingPermissionsSettings - Retrieve voice dialing permissions inheritance for the sub-account
    **/
    fetchDialingPermissionsSettings(req: operations.FetchDialingPermissionsSettingsRequest, config?: AxiosRequestConfig): Promise<operations.FetchDialingPermissionsSettingsResponse>;
    fetchIpRecord(req: operations.FetchIpRecordRequest, config?: AxiosRequestConfig): Promise<operations.FetchIpRecordResponse>;
    fetchSourceIpMapping(req: operations.FetchSourceIpMappingRequest, config?: AxiosRequestConfig): Promise<operations.FetchSourceIpMappingResponse>;
    listByocTrunk(req: operations.ListByocTrunkRequest, config?: AxiosRequestConfig): Promise<operations.ListByocTrunkResponse>;
    listConnectionPolicy(req: operations.ListConnectionPolicyRequest, config?: AxiosRequestConfig): Promise<operations.ListConnectionPolicyResponse>;
    listConnectionPolicyTarget(req: operations.ListConnectionPolicyTargetRequest, config?: AxiosRequestConfig): Promise<operations.ListConnectionPolicyTargetResponse>;
    /**
     * listDialingPermissionsCountry - Retrieve all voice dialing country permissions for this account
    **/
    listDialingPermissionsCountry(req: operations.ListDialingPermissionsCountryRequest, config?: AxiosRequestConfig): Promise<operations.ListDialingPermissionsCountryResponse>;
    /**
     * listDialingPermissionsHrsPrefixes - Fetch the high-risk special services prefixes from the country resource corresponding to the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
    **/
    listDialingPermissionsHrsPrefixes(req: operations.ListDialingPermissionsHrsPrefixesRequest, config?: AxiosRequestConfig): Promise<operations.ListDialingPermissionsHrsPrefixesResponse>;
    listIpRecord(req: operations.ListIpRecordRequest, config?: AxiosRequestConfig): Promise<operations.ListIpRecordResponse>;
    listSourceIpMapping(req: operations.ListSourceIpMappingRequest, config?: AxiosRequestConfig): Promise<operations.ListSourceIpMappingResponse>;
    updateByocTrunk(req: operations.UpdateByocTrunkRequest, config?: AxiosRequestConfig): Promise<operations.UpdateByocTrunkResponse>;
    updateConnectionPolicy(req: operations.UpdateConnectionPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConnectionPolicyResponse>;
    updateConnectionPolicyTarget(req: operations.UpdateConnectionPolicyTargetRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConnectionPolicyTargetResponse>;
    /**
     * updateDialingPermissionsSettings - Update voice dialing permissions inheritance for the sub-account
    **/
    updateDialingPermissionsSettings(req: operations.UpdateDialingPermissionsSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDialingPermissionsSettingsResponse>;
    updateIpRecord(req: operations.UpdateIpRecordRequest, config?: AxiosRequestConfig): Promise<operations.UpdateIpRecordResponse>;
    updateSourceIpMapping(req: operations.UpdateSourceIpMappingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSourceIpMappingResponse>;
}
export {};
