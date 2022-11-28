import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://numbers.twilio.com"];
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
     * createBundle - Create a new Bundle.
    **/
    createBundle(req: operations.CreateBundleRequest, config?: AxiosRequestConfig): Promise<operations.CreateBundleResponse>;
    /**
     * createBundleCopy - Creates a new copy of a Bundle. It will internally create copies of all the bundle items (identities and documents) of the original bundle
    **/
    createBundleCopy(req: operations.CreateBundleCopyRequest, config?: AxiosRequestConfig): Promise<operations.CreateBundleCopyResponse>;
    /**
     * createEndUser - Create a new End User.
    **/
    createEndUser(req: operations.CreateEndUserRequest, config?: AxiosRequestConfig): Promise<operations.CreateEndUserResponse>;
    /**
     * createEvaluation - Creates an evaluation for a bundle
    **/
    createEvaluation(req: operations.CreateEvaluationRequest, config?: AxiosRequestConfig): Promise<operations.CreateEvaluationResponse>;
    /**
     * createItemAssignment - Create a new Assigned Item.
    **/
    createItemAssignment(req: operations.CreateItemAssignmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateItemAssignmentResponse>;
    /**
     * createReplaceItems - Replaces all bundle items in the target bundle (specified in the path) with all the bundle items of the source bundle (specified by the from_bundle_sid body param)
    **/
    createReplaceItems(req: operations.CreateReplaceItemsRequest, config?: AxiosRequestConfig): Promise<operations.CreateReplaceItemsResponse>;
    /**
     * createSupportingDocument - Create a new Supporting Document.
    **/
    createSupportingDocument(req: operations.CreateSupportingDocumentRequest, config?: AxiosRequestConfig): Promise<operations.CreateSupportingDocumentResponse>;
    /**
     * deleteBundle - Delete a specific Bundle.
    **/
    deleteBundle(req: operations.DeleteBundleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBundleResponse>;
    /**
     * deleteEndUser - Delete a specific End User.
    **/
    deleteEndUser(req: operations.DeleteEndUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEndUserResponse>;
    /**
     * deleteItemAssignment - Remove an Assignment Item Instance.
    **/
    deleteItemAssignment(req: operations.DeleteItemAssignmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteItemAssignmentResponse>;
    /**
     * deleteSupportingDocument - Delete a specific Supporting Document.
    **/
    deleteSupportingDocument(req: operations.DeleteSupportingDocumentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSupportingDocumentResponse>;
    /**
     * fetchBundle - Fetch a specific Bundle instance.
    **/
    fetchBundle(req: operations.FetchBundleRequest, config?: AxiosRequestConfig): Promise<operations.FetchBundleResponse>;
    /**
     * fetchEndUser - Fetch specific End User Instance.
    **/
    fetchEndUser(req: operations.FetchEndUserRequest, config?: AxiosRequestConfig): Promise<operations.FetchEndUserResponse>;
    /**
     * fetchEndUserType - Fetch a specific End-User Type Instance.
    **/
    fetchEndUserType(req: operations.FetchEndUserTypeRequest, config?: AxiosRequestConfig): Promise<operations.FetchEndUserTypeResponse>;
    /**
     * fetchEvaluation - Fetch specific Evaluation Instance.
    **/
    fetchEvaluation(req: operations.FetchEvaluationRequest, config?: AxiosRequestConfig): Promise<operations.FetchEvaluationResponse>;
    /**
     * fetchItemAssignment - Fetch specific Assigned Item Instance.
    **/
    fetchItemAssignment(req: operations.FetchItemAssignmentRequest, config?: AxiosRequestConfig): Promise<operations.FetchItemAssignmentResponse>;
    /**
     * fetchRegulation - Fetch specific Regulation Instance.
    **/
    fetchRegulation(req: operations.FetchRegulationRequest, config?: AxiosRequestConfig): Promise<operations.FetchRegulationResponse>;
    /**
     * fetchSupportingDocument - Fetch specific Supporting Document Instance.
    **/
    fetchSupportingDocument(req: operations.FetchSupportingDocumentRequest, config?: AxiosRequestConfig): Promise<operations.FetchSupportingDocumentResponse>;
    /**
     * fetchSupportingDocumentType - Fetch a specific Supporting Document Type Instance.
    **/
    fetchSupportingDocumentType(req: operations.FetchSupportingDocumentTypeRequest, config?: AxiosRequestConfig): Promise<operations.FetchSupportingDocumentTypeResponse>;
    /**
     * listBundle - Retrieve a list of all Bundles for an account.
    **/
    listBundle(req: operations.ListBundleRequest, config?: AxiosRequestConfig): Promise<operations.ListBundleResponse>;
    /**
     * listBundleCopy - Retrieve a list of all Bundles Copies for a Bundle.
    **/
    listBundleCopy(req: operations.ListBundleCopyRequest, config?: AxiosRequestConfig): Promise<operations.ListBundleCopyResponse>;
    /**
     * listEndUser - Retrieve a list of all End User for an account.
    **/
    listEndUser(req: operations.ListEndUserRequest, config?: AxiosRequestConfig): Promise<operations.ListEndUserResponse>;
    /**
     * listEndUserType - Retrieve a list of all End-User Types.
    **/
    listEndUserType(req: operations.ListEndUserTypeRequest, config?: AxiosRequestConfig): Promise<operations.ListEndUserTypeResponse>;
    /**
     * listEvaluation - Retrieve a list of Evaluations associated to the Bundle resource.
    **/
    listEvaluation(req: operations.ListEvaluationRequest, config?: AxiosRequestConfig): Promise<operations.ListEvaluationResponse>;
    /**
     * listItemAssignment - Retrieve a list of all Assigned Items for an account.
    **/
    listItemAssignment(req: operations.ListItemAssignmentRequest, config?: AxiosRequestConfig): Promise<operations.ListItemAssignmentResponse>;
    /**
     * listRegulation - Retrieve a list of all Regulations.
    **/
    listRegulation(req: operations.ListRegulationRequest, config?: AxiosRequestConfig): Promise<operations.ListRegulationResponse>;
    /**
     * listSupportingDocument - Retrieve a list of all Supporting Document for an account.
    **/
    listSupportingDocument(req: operations.ListSupportingDocumentRequest, config?: AxiosRequestConfig): Promise<operations.ListSupportingDocumentResponse>;
    /**
     * listSupportingDocumentType - Retrieve a list of all Supporting Document Types.
    **/
    listSupportingDocumentType(req: operations.ListSupportingDocumentTypeRequest, config?: AxiosRequestConfig): Promise<operations.ListSupportingDocumentTypeResponse>;
    /**
     * updateBundle - Updates a Bundle in an account.
    **/
    updateBundle(req: operations.UpdateBundleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBundleResponse>;
    /**
     * updateEndUser - Update an existing End User.
    **/
    updateEndUser(req: operations.UpdateEndUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEndUserResponse>;
    /**
     * updateSupportingDocument - Update an existing Supporting Document.
    **/
    updateSupportingDocument(req: operations.UpdateSupportingDocumentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSupportingDocumentResponse>;
}
export {};
