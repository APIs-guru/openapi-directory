import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://sync.twilio.com"];
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
    createDocument(req: operations.CreateDocumentRequest, config?: AxiosRequestConfig): Promise<operations.CreateDocumentResponse>;
    createService(req: operations.CreateServiceRequest, config?: AxiosRequestConfig): Promise<operations.CreateServiceResponse>;
    /**
     * createStreamMessage - Create a new Stream Message.
    **/
    createStreamMessage(req: operations.CreateStreamMessageRequest, config?: AxiosRequestConfig): Promise<operations.CreateStreamMessageResponse>;
    createSyncList(req: operations.CreateSyncListRequest, config?: AxiosRequestConfig): Promise<operations.CreateSyncListResponse>;
    createSyncListItem(req: operations.CreateSyncListItemRequest, config?: AxiosRequestConfig): Promise<operations.CreateSyncListItemResponse>;
    createSyncMap(req: operations.CreateSyncMapRequest, config?: AxiosRequestConfig): Promise<operations.CreateSyncMapResponse>;
    createSyncMapItem(req: operations.CreateSyncMapItemRequest, config?: AxiosRequestConfig): Promise<operations.CreateSyncMapItemResponse>;
    /**
     * createSyncStream - Create a new Stream.
    **/
    createSyncStream(req: operations.CreateSyncStreamRequest, config?: AxiosRequestConfig): Promise<operations.CreateSyncStreamResponse>;
    deleteDocument(req: operations.DeleteDocumentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDocumentResponse>;
    /**
     * deleteDocumentPermission - Delete a specific Sync Document Permission.
    **/
    deleteDocumentPermission(req: operations.DeleteDocumentPermissionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDocumentPermissionResponse>;
    deleteService(req: operations.DeleteServiceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServiceResponse>;
    deleteSyncList(req: operations.DeleteSyncListRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSyncListResponse>;
    deleteSyncListItem(req: operations.DeleteSyncListItemRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSyncListItemResponse>;
    /**
     * deleteSyncListPermission - Delete a specific Sync List Permission.
    **/
    deleteSyncListPermission(req: operations.DeleteSyncListPermissionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSyncListPermissionResponse>;
    deleteSyncMap(req: operations.DeleteSyncMapRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSyncMapResponse>;
    deleteSyncMapItem(req: operations.DeleteSyncMapItemRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSyncMapItemResponse>;
    /**
     * deleteSyncMapPermission - Delete a specific Sync Map Permission.
    **/
    deleteSyncMapPermission(req: operations.DeleteSyncMapPermissionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSyncMapPermissionResponse>;
    /**
     * deleteSyncStream - Delete a specific Stream.
    **/
    deleteSyncStream(req: operations.DeleteSyncStreamRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSyncStreamResponse>;
    fetchDocument(req: operations.FetchDocumentRequest, config?: AxiosRequestConfig): Promise<operations.FetchDocumentResponse>;
    /**
     * fetchDocumentPermission - Fetch a specific Sync Document Permission.
    **/
    fetchDocumentPermission(req: operations.FetchDocumentPermissionRequest, config?: AxiosRequestConfig): Promise<operations.FetchDocumentPermissionResponse>;
    fetchService(req: operations.FetchServiceRequest, config?: AxiosRequestConfig): Promise<operations.FetchServiceResponse>;
    fetchSyncList(req: operations.FetchSyncListRequest, config?: AxiosRequestConfig): Promise<operations.FetchSyncListResponse>;
    fetchSyncListItem(req: operations.FetchSyncListItemRequest, config?: AxiosRequestConfig): Promise<operations.FetchSyncListItemResponse>;
    /**
     * fetchSyncListPermission - Fetch a specific Sync List Permission.
    **/
    fetchSyncListPermission(req: operations.FetchSyncListPermissionRequest, config?: AxiosRequestConfig): Promise<operations.FetchSyncListPermissionResponse>;
    fetchSyncMap(req: operations.FetchSyncMapRequest, config?: AxiosRequestConfig): Promise<operations.FetchSyncMapResponse>;
    fetchSyncMapItem(req: operations.FetchSyncMapItemRequest, config?: AxiosRequestConfig): Promise<operations.FetchSyncMapItemResponse>;
    /**
     * fetchSyncMapPermission - Fetch a specific Sync Map Permission.
    **/
    fetchSyncMapPermission(req: operations.FetchSyncMapPermissionRequest, config?: AxiosRequestConfig): Promise<operations.FetchSyncMapPermissionResponse>;
    /**
     * fetchSyncStream - Fetch a specific Stream.
    **/
    fetchSyncStream(req: operations.FetchSyncStreamRequest, config?: AxiosRequestConfig): Promise<operations.FetchSyncStreamResponse>;
    listDocument(req: operations.ListDocumentRequest, config?: AxiosRequestConfig): Promise<operations.ListDocumentResponse>;
    /**
     * listDocumentPermission - Retrieve a list of all Permissions applying to a Sync Document.
    **/
    listDocumentPermission(req: operations.ListDocumentPermissionRequest, config?: AxiosRequestConfig): Promise<operations.ListDocumentPermissionResponse>;
    listService(req: operations.ListServiceRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceResponse>;
    listSyncList(req: operations.ListSyncListRequest, config?: AxiosRequestConfig): Promise<operations.ListSyncListResponse>;
    listSyncListItem(req: operations.ListSyncListItemRequest, config?: AxiosRequestConfig): Promise<operations.ListSyncListItemResponse>;
    /**
     * listSyncListPermission - Retrieve a list of all Permissions applying to a Sync List.
    **/
    listSyncListPermission(req: operations.ListSyncListPermissionRequest, config?: AxiosRequestConfig): Promise<operations.ListSyncListPermissionResponse>;
    listSyncMap(req: operations.ListSyncMapRequest, config?: AxiosRequestConfig): Promise<operations.ListSyncMapResponse>;
    listSyncMapItem(req: operations.ListSyncMapItemRequest, config?: AxiosRequestConfig): Promise<operations.ListSyncMapItemResponse>;
    /**
     * listSyncMapPermission - Retrieve a list of all Permissions applying to a Sync Map.
    **/
    listSyncMapPermission(req: operations.ListSyncMapPermissionRequest, config?: AxiosRequestConfig): Promise<operations.ListSyncMapPermissionResponse>;
    /**
     * listSyncStream - Retrieve a list of all Streams in a Service Instance.
    **/
    listSyncStream(req: operations.ListSyncStreamRequest, config?: AxiosRequestConfig): Promise<operations.ListSyncStreamResponse>;
    updateDocument(req: operations.UpdateDocumentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDocumentResponse>;
    /**
     * updateDocumentPermission - Update an identity's access to a specific Sync Document.
    **/
    updateDocumentPermission(req: operations.UpdateDocumentPermissionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDocumentPermissionResponse>;
    updateService(req: operations.UpdateServiceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceResponse>;
    updateSyncList(req: operations.UpdateSyncListRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSyncListResponse>;
    updateSyncListItem(req: operations.UpdateSyncListItemRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSyncListItemResponse>;
    /**
     * updateSyncListPermission - Update an identity's access to a specific Sync List.
    **/
    updateSyncListPermission(req: operations.UpdateSyncListPermissionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSyncListPermissionResponse>;
    updateSyncMap(req: operations.UpdateSyncMapRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSyncMapResponse>;
    updateSyncMapItem(req: operations.UpdateSyncMapItemRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSyncMapItemResponse>;
    /**
     * updateSyncMapPermission - Update an identity's access to a specific Sync Map.
    **/
    updateSyncMapPermission(req: operations.UpdateSyncMapPermissionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSyncMapPermissionResponse>;
    /**
     * updateSyncStream - Update a specific Stream.
    **/
    updateSyncStream(req: operations.UpdateSyncStreamRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSyncStreamResponse>;
}
export {};
