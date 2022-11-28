import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://cloud.redhat.com/{basePath}", "http://localhost:{port}/{basePath}"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * appliedInventoriesTagsForServiceOffering - Invokes computing of ServiceInventories tags for given ServiceOffering
     *
     * Returns an array of inventories tags
    **/
    appliedInventoriesTagsForServiceOffering(req: operations.AppliedInventoriesTagsForServiceOfferingRequest, config?: AxiosRequestConfig): Promise<operations.AppliedInventoriesTagsForServiceOfferingResponse>;
    /**
     * getDocumentation - Return this API document in JSON format
    **/
    getDocumentation(config?: AxiosRequestConfig): Promise<operations.GetDocumentationResponse>;
    /**
     * incrementalRefreshSource - Incremental Refresh an existing Source
     *
     * Incremental Refresh a source object
    **/
    incrementalRefreshSource(req: operations.IncrementalRefreshSourceRequest, config?: AxiosRequestConfig): Promise<operations.IncrementalRefreshSourceResponse>;
    /**
     * listServiceCredentialTypes - List ServiceCredentialTypes
     *
     * Returns an array of ServiceCredentialType objects
    **/
    listServiceCredentialTypes(req: operations.ListServiceCredentialTypesRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceCredentialTypesResponse>;
    /**
     * listServiceCredentials - List ServiceCredentials
     *
     * Returns an array of ServiceCredential objects
    **/
    listServiceCredentials(req: operations.ListServiceCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceCredentialsResponse>;
    /**
     * listServiceInstances - List ServiceInstances
     *
     * Returns an array of ServiceInstance objects
    **/
    listServiceInstances(req: operations.ListServiceInstancesRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceInstancesResponse>;
    /**
     * listServiceInventories - List ServiceInventories
     *
     * Returns an array of ServiceInventory objects
    **/
    listServiceInventories(req: operations.ListServiceInventoriesRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceInventoriesResponse>;
    /**
     * listServiceInventoryTags - List Tags for ServiceInventory
     *
     * Returns an array of Tag objects
    **/
    listServiceInventoryTags(req: operations.ListServiceInventoryTagsRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceInventoryTagsResponse>;
    /**
     * listServiceOfferingNodes - List ServiceOfferingNodes
     *
     * Returns an array of ServiceOfferingNode objects
    **/
    listServiceOfferingNodes(req: operations.ListServiceOfferingNodesRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceOfferingNodesResponse>;
    /**
     * listServiceOfferingServiceInstances - List ServiceInstances for ServiceOffering
     *
     * Returns an array of ServiceInstance objects
    **/
    listServiceOfferingServiceInstances(req: operations.ListServiceOfferingServiceInstancesRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceOfferingServiceInstancesResponse>;
    /**
     * listServiceOfferingServiceOfferingNodes - List ServiceOfferingNodes for ServiceOffering
     *
     * Returns an array of ServiceOfferingNode objects
    **/
    listServiceOfferingServiceOfferingNodes(req: operations.ListServiceOfferingServiceOfferingNodesRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceOfferingServiceOfferingNodesResponse>;
    /**
     * listServiceOfferingServicePlans - List ServicePlans for ServiceOffering
     *
     * Returns an array of ServicePlan objects
    **/
    listServiceOfferingServicePlans(req: operations.ListServiceOfferingServicePlansRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceOfferingServicePlansResponse>;
    /**
     * listServiceOfferings - List ServiceOfferings
     *
     * Returns an array of ServiceOffering objects
    **/
    listServiceOfferings(req: operations.ListServiceOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceOfferingsResponse>;
    /**
     * listServicePlans - List ServicePlans
     *
     * Returns an array of ServicePlan objects
    **/
    listServicePlans(req: operations.ListServicePlansRequest, config?: AxiosRequestConfig): Promise<operations.ListServicePlansResponse>;
    /**
     * listSourceServiceInstances - List ServiceInstances for Source
     *
     * Returns an array of ServiceInstance objects
    **/
    listSourceServiceInstances(req: operations.ListSourceServiceInstancesRequest, config?: AxiosRequestConfig): Promise<operations.ListSourceServiceInstancesResponse>;
    /**
     * listSourceServiceInventories - List ServiceInventories for Source
     *
     * Returns an array of ServiceInventory objects
    **/
    listSourceServiceInventories(req: operations.ListSourceServiceInventoriesRequest, config?: AxiosRequestConfig): Promise<operations.ListSourceServiceInventoriesResponse>;
    /**
     * listSourceServiceOfferingNodes - List ServiceOfferingNodes for Source
     *
     * Returns an array of ServiceOfferingNode objects
    **/
    listSourceServiceOfferingNodes(req: operations.ListSourceServiceOfferingNodesRequest, config?: AxiosRequestConfig): Promise<operations.ListSourceServiceOfferingNodesResponse>;
    /**
     * listSourceServiceOfferings - List ServiceOfferings for Source
     *
     * Returns an array of ServiceOffering objects
    **/
    listSourceServiceOfferings(req: operations.ListSourceServiceOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.ListSourceServiceOfferingsResponse>;
    /**
     * listSourceServicePlans - List ServicePlans for Source
     *
     * Returns an array of ServicePlan objects
    **/
    listSourceServicePlans(req: operations.ListSourceServicePlansRequest, config?: AxiosRequestConfig): Promise<operations.ListSourceServicePlansResponse>;
    /**
     * listSourceTasks - List Tasks for Source
     *
     * Returns an array of Task objects
    **/
    listSourceTasks(req: operations.ListSourceTasksRequest, config?: AxiosRequestConfig): Promise<operations.ListSourceTasksResponse>;
    /**
     * listSources - List Sources
     *
     * Returns an array of Source objects
    **/
    listSources(req: operations.ListSourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListSourcesResponse>;
    /**
     * listTags - List Tags
     *
     * Returns an array of Tag objects
    **/
    listTags(req: operations.ListTagsRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsResponse>;
    /**
     * listTasks - List Tasks
     *
     * Returns an array of Task objects
    **/
    listTasks(req: operations.ListTasksRequest, config?: AxiosRequestConfig): Promise<operations.ListTasksResponse>;
    /**
     * orderServiceOffering - Order an existing ServiceOffering
     *
     * Returns a Task id
    **/
    orderServiceOffering(req: operations.OrderServiceOfferingRequest, config?: AxiosRequestConfig): Promise<operations.OrderServiceOfferingResponse>;
    /**
     * postGraphQl - Perform a GraphQL Query
     *
     * Performs a GraphQL Query
    **/
    postGraphQl(req: operations.PostGraphQlRequest, config?: AxiosRequestConfig): Promise<operations.PostGraphQlResponse>;
    /**
     * refreshSource -  Refresh an existing Source
     *
     * Refresh a source object
    **/
    refreshSource(req: operations.RefreshSourceRequest, config?: AxiosRequestConfig): Promise<operations.RefreshSourceResponse>;
    /**
     * showServiceCredential - Show an existing ServiceCredential
     *
     * Returns a ServiceCredential object
    **/
    showServiceCredential(req: operations.ShowServiceCredentialRequest, config?: AxiosRequestConfig): Promise<operations.ShowServiceCredentialResponse>;
    /**
     * showServiceCredentialType - Show an existing ServiceCredentialType
     *
     * Returns a ServiceCredentialType object
    **/
    showServiceCredentialType(req: operations.ShowServiceCredentialTypeRequest, config?: AxiosRequestConfig): Promise<operations.ShowServiceCredentialTypeResponse>;
    /**
     * showServiceInstance - Show an existing ServiceInstance
     *
     * Returns a ServiceInstance object
    **/
    showServiceInstance(req: operations.ShowServiceInstanceRequest, config?: AxiosRequestConfig): Promise<operations.ShowServiceInstanceResponse>;
    /**
     * showServiceInventory - Show an existing ServiceInventory
     *
     * Returns a ServiceInventory object
    **/
    showServiceInventory(req: operations.ShowServiceInventoryRequest, config?: AxiosRequestConfig): Promise<operations.ShowServiceInventoryResponse>;
    /**
     * showServiceOffering - Show an existing ServiceOffering
     *
     * Returns a ServiceOffering object
    **/
    showServiceOffering(req: operations.ShowServiceOfferingRequest, config?: AxiosRequestConfig): Promise<operations.ShowServiceOfferingResponse>;
    /**
     * showServiceOfferingNode - Show an existing ServiceOfferingNode
     *
     * Returns a ServiceOfferingNode object
    **/
    showServiceOfferingNode(req: operations.ShowServiceOfferingNodeRequest, config?: AxiosRequestConfig): Promise<operations.ShowServiceOfferingNodeResponse>;
    /**
     * showServicePlan - Show an existing ServicePlan
     *
     * Returns a ServicePlan object
    **/
    showServicePlan(req: operations.ShowServicePlanRequest, config?: AxiosRequestConfig): Promise<operations.ShowServicePlanResponse>;
    /**
     * showSource - Show an existing Source
     *
     * Returns a Source object
    **/
    showSource(req: operations.ShowSourceRequest, config?: AxiosRequestConfig): Promise<operations.ShowSourceResponse>;
    /**
     * showTask - Show an existing Task
     *
     * Returns a Task object
    **/
    showTask(req: operations.ShowTaskRequest, config?: AxiosRequestConfig): Promise<operations.ShowTaskResponse>;
    /**
     * tagServiceInventory - Tag a ServiceInventory
     *
     * Tags a ServiceInventory object
    **/
    tagServiceInventory(req: operations.TagServiceInventoryRequest, config?: AxiosRequestConfig): Promise<operations.TagServiceInventoryResponse>;
    /**
     * untagServiceInventory - Untag a ServiceInventory
     *
     * Untags a ServiceInventory object
    **/
    untagServiceInventory(req: operations.UntagServiceInventoryRequest, config?: AxiosRequestConfig): Promise<operations.UntagServiceInventoryResponse>;
    /**
     * updateTask - Update an existing Task
     *
     * Updates a Task object
    **/
    updateTask(req: operations.UpdateTaskRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTaskResponse>;
}
export {};
