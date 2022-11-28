import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://trusthub.twilio.com"];
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
     * createCustomerProfile - Create a new Customer-Profile.
    **/
    createCustomerProfile(req: operations.CreateCustomerProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateCustomerProfileResponse>;
    /**
     * createCustomerProfileChannelEndpointAssignment - Create a new Assigned Item.
    **/
    createCustomerProfileChannelEndpointAssignment(req: operations.CreateCustomerProfileChannelEndpointAssignmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateCustomerProfileChannelEndpointAssignmentResponse>;
    /**
     * createCustomerProfileEntityAssignment - Create a new Assigned Item.
    **/
    createCustomerProfileEntityAssignment(req: operations.CreateCustomerProfileEntityAssignmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateCustomerProfileEntityAssignmentResponse>;
    /**
     * createCustomerProfileEvaluation - Create a new Evaluation
    **/
    createCustomerProfileEvaluation(req: operations.CreateCustomerProfileEvaluationRequest, config?: AxiosRequestConfig): Promise<operations.CreateCustomerProfileEvaluationResponse>;
    /**
     * createEndUser - Create a new End User.
    **/
    createEndUser(req: operations.CreateEndUserRequest, config?: AxiosRequestConfig): Promise<operations.CreateEndUserResponse>;
    /**
     * createSupportingDocument - Create a new Supporting Document.
    **/
    createSupportingDocument(req: operations.CreateSupportingDocumentRequest, config?: AxiosRequestConfig): Promise<operations.CreateSupportingDocumentResponse>;
    /**
     * createTrustProduct - Create a new Customer-Profile.
    **/
    createTrustProduct(req: operations.CreateTrustProductRequest, config?: AxiosRequestConfig): Promise<operations.CreateTrustProductResponse>;
    /**
     * createTrustProductChannelEndpointAssignment - Create a new Assigned Item.
    **/
    createTrustProductChannelEndpointAssignment(req: operations.CreateTrustProductChannelEndpointAssignmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateTrustProductChannelEndpointAssignmentResponse>;
    /**
     * createTrustProductEntityAssignment - Create a new Assigned Item.
    **/
    createTrustProductEntityAssignment(req: operations.CreateTrustProductEntityAssignmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateTrustProductEntityAssignmentResponse>;
    /**
     * createTrustProductEvaluation - Create a new Evaluation
    **/
    createTrustProductEvaluation(req: operations.CreateTrustProductEvaluationRequest, config?: AxiosRequestConfig): Promise<operations.CreateTrustProductEvaluationResponse>;
    /**
     * deleteCustomerProfile - Delete a specific Customer-Profile.
    **/
    deleteCustomerProfile(req: operations.DeleteCustomerProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomerProfileResponse>;
    /**
     * deleteCustomerProfileChannelEndpointAssignment - Remove an Assignment Item Instance.
    **/
    deleteCustomerProfileChannelEndpointAssignment(req: operations.DeleteCustomerProfileChannelEndpointAssignmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomerProfileChannelEndpointAssignmentResponse>;
    /**
     * deleteCustomerProfileEntityAssignment - Remove an Assignment Item Instance.
    **/
    deleteCustomerProfileEntityAssignment(req: operations.DeleteCustomerProfileEntityAssignmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomerProfileEntityAssignmentResponse>;
    /**
     * deleteEndUser - Delete a specific End User.
    **/
    deleteEndUser(req: operations.DeleteEndUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEndUserResponse>;
    /**
     * deleteSupportingDocument - Delete a specific Supporting Document.
    **/
    deleteSupportingDocument(req: operations.DeleteSupportingDocumentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSupportingDocumentResponse>;
    /**
     * deleteTrustProduct - Delete a specific Customer-Profile.
    **/
    deleteTrustProduct(req: operations.DeleteTrustProductRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTrustProductResponse>;
    /**
     * deleteTrustProductChannelEndpointAssignment - Remove an Assignment Item Instance.
    **/
    deleteTrustProductChannelEndpointAssignment(req: operations.DeleteTrustProductChannelEndpointAssignmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTrustProductChannelEndpointAssignmentResponse>;
    /**
     * deleteTrustProductEntityAssignment - Remove an Assignment Item Instance.
    **/
    deleteTrustProductEntityAssignment(req: operations.DeleteTrustProductEntityAssignmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTrustProductEntityAssignmentResponse>;
    /**
     * fetchCustomerProfile - Fetch a specific Customer-Profile instance.
    **/
    fetchCustomerProfile(req: operations.FetchCustomerProfileRequest, config?: AxiosRequestConfig): Promise<operations.FetchCustomerProfileResponse>;
    /**
     * fetchCustomerProfileChannelEndpointAssignment - Fetch specific Assigned Item Instance.
    **/
    fetchCustomerProfileChannelEndpointAssignment(req: operations.FetchCustomerProfileChannelEndpointAssignmentRequest, config?: AxiosRequestConfig): Promise<operations.FetchCustomerProfileChannelEndpointAssignmentResponse>;
    /**
     * fetchCustomerProfileEntityAssignment - Fetch specific Assigned Item Instance.
    **/
    fetchCustomerProfileEntityAssignment(req: operations.FetchCustomerProfileEntityAssignmentRequest, config?: AxiosRequestConfig): Promise<operations.FetchCustomerProfileEntityAssignmentResponse>;
    /**
     * fetchCustomerProfileEvaluation - Fetch specific Evaluation Instance.
    **/
    fetchCustomerProfileEvaluation(req: operations.FetchCustomerProfileEvaluationRequest, config?: AxiosRequestConfig): Promise<operations.FetchCustomerProfileEvaluationResponse>;
    /**
     * fetchEndUser - Fetch specific End User Instance.
    **/
    fetchEndUser(req: operations.FetchEndUserRequest, config?: AxiosRequestConfig): Promise<operations.FetchEndUserResponse>;
    /**
     * fetchEndUserType - Fetch a specific End-User Type Instance.
    **/
    fetchEndUserType(req: operations.FetchEndUserTypeRequest, config?: AxiosRequestConfig): Promise<operations.FetchEndUserTypeResponse>;
    /**
     * fetchPolicies - Fetch specific Policy Instance.
    **/
    fetchPolicies(req: operations.FetchPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.FetchPoliciesResponse>;
    /**
     * fetchSupportingDocument - Fetch specific Supporting Document Instance.
    **/
    fetchSupportingDocument(req: operations.FetchSupportingDocumentRequest, config?: AxiosRequestConfig): Promise<operations.FetchSupportingDocumentResponse>;
    /**
     * fetchSupportingDocumentType - Fetch a specific Supporting Document Type Instance.
    **/
    fetchSupportingDocumentType(req: operations.FetchSupportingDocumentTypeRequest, config?: AxiosRequestConfig): Promise<operations.FetchSupportingDocumentTypeResponse>;
    /**
     * fetchTrustProduct - Fetch a specific Customer-Profile instance.
    **/
    fetchTrustProduct(req: operations.FetchTrustProductRequest, config?: AxiosRequestConfig): Promise<operations.FetchTrustProductResponse>;
    /**
     * fetchTrustProductChannelEndpointAssignment - Fetch specific Assigned Item Instance.
    **/
    fetchTrustProductChannelEndpointAssignment(req: operations.FetchTrustProductChannelEndpointAssignmentRequest, config?: AxiosRequestConfig): Promise<operations.FetchTrustProductChannelEndpointAssignmentResponse>;
    /**
     * fetchTrustProductEntityAssignment - Fetch specific Assigned Item Instance.
    **/
    fetchTrustProductEntityAssignment(req: operations.FetchTrustProductEntityAssignmentRequest, config?: AxiosRequestConfig): Promise<operations.FetchTrustProductEntityAssignmentResponse>;
    /**
     * fetchTrustProductEvaluation - Fetch specific Evaluation Instance.
    **/
    fetchTrustProductEvaluation(req: operations.FetchTrustProductEvaluationRequest, config?: AxiosRequestConfig): Promise<operations.FetchTrustProductEvaluationResponse>;
    /**
     * listCustomerProfile - Retrieve a list of all Customer-Profiles for an account.
    **/
    listCustomerProfile(req: operations.ListCustomerProfileRequest, config?: AxiosRequestConfig): Promise<operations.ListCustomerProfileResponse>;
    /**
     * listCustomerProfileChannelEndpointAssignment - Retrieve a list of all Assigned Items for an account.
    **/
    listCustomerProfileChannelEndpointAssignment(req: operations.ListCustomerProfileChannelEndpointAssignmentRequest, config?: AxiosRequestConfig): Promise<operations.ListCustomerProfileChannelEndpointAssignmentResponse>;
    /**
     * listCustomerProfileEntityAssignment - Retrieve a list of all Assigned Items for an account.
    **/
    listCustomerProfileEntityAssignment(req: operations.ListCustomerProfileEntityAssignmentRequest, config?: AxiosRequestConfig): Promise<operations.ListCustomerProfileEntityAssignmentResponse>;
    /**
     * listCustomerProfileEvaluation - Retrieve a list of Evaluations associated to the customer_profile resource.
    **/
    listCustomerProfileEvaluation(req: operations.ListCustomerProfileEvaluationRequest, config?: AxiosRequestConfig): Promise<operations.ListCustomerProfileEvaluationResponse>;
    /**
     * listEndUser - Retrieve a list of all End User for an account.
    **/
    listEndUser(req: operations.ListEndUserRequest, config?: AxiosRequestConfig): Promise<operations.ListEndUserResponse>;
    /**
     * listEndUserType - Retrieve a list of all End-User Types.
    **/
    listEndUserType(req: operations.ListEndUserTypeRequest, config?: AxiosRequestConfig): Promise<operations.ListEndUserTypeResponse>;
    /**
     * listPolicies - Retrieve a list of all Policys.
    **/
    listPolicies(req: operations.ListPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.ListPoliciesResponse>;
    /**
     * listSupportingDocument - Retrieve a list of all Supporting Document for an account.
    **/
    listSupportingDocument(req: operations.ListSupportingDocumentRequest, config?: AxiosRequestConfig): Promise<operations.ListSupportingDocumentResponse>;
    /**
     * listSupportingDocumentType - Retrieve a list of all Supporting Document Types.
    **/
    listSupportingDocumentType(req: operations.ListSupportingDocumentTypeRequest, config?: AxiosRequestConfig): Promise<operations.ListSupportingDocumentTypeResponse>;
    /**
     * listTrustProduct - Retrieve a list of all Customer-Profiles for an account.
    **/
    listTrustProduct(req: operations.ListTrustProductRequest, config?: AxiosRequestConfig): Promise<operations.ListTrustProductResponse>;
    /**
     * listTrustProductChannelEndpointAssignment - Retrieve a list of all Assigned Items for an account.
    **/
    listTrustProductChannelEndpointAssignment(req: operations.ListTrustProductChannelEndpointAssignmentRequest, config?: AxiosRequestConfig): Promise<operations.ListTrustProductChannelEndpointAssignmentResponse>;
    /**
     * listTrustProductEntityAssignment - Retrieve a list of all Assigned Items for an account.
    **/
    listTrustProductEntityAssignment(req: operations.ListTrustProductEntityAssignmentRequest, config?: AxiosRequestConfig): Promise<operations.ListTrustProductEntityAssignmentResponse>;
    /**
     * listTrustProductEvaluation - Retrieve a list of Evaluations associated to the trust_product resource.
    **/
    listTrustProductEvaluation(req: operations.ListTrustProductEvaluationRequest, config?: AxiosRequestConfig): Promise<operations.ListTrustProductEvaluationResponse>;
    /**
     * updateCustomerProfile - Updates a Customer-Profile in an account.
    **/
    updateCustomerProfile(req: operations.UpdateCustomerProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCustomerProfileResponse>;
    /**
     * updateEndUser - Update an existing End User.
    **/
    updateEndUser(req: operations.UpdateEndUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEndUserResponse>;
    /**
     * updateSupportingDocument - Update an existing Supporting Document.
    **/
    updateSupportingDocument(req: operations.UpdateSupportingDocumentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSupportingDocumentResponse>;
    /**
     * updateTrustProduct - Updates a Customer-Profile in an account.
    **/
    updateTrustProduct(req: operations.UpdateTrustProductRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTrustProductResponse>;
}
export {};
