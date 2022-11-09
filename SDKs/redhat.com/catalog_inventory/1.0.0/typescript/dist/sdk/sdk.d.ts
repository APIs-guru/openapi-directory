import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Returns an array of inventories tags
    **/
    AppliedInventoriesTagsForServiceOffering(req: operations.AppliedInventoriesTagsForServiceOfferingRequest, config?: AxiosRequestConfig): Promise<operations.AppliedInventoriesTagsForServiceOfferingResponse>;
    GetDocumentation(config?: AxiosRequestConfig): Promise<operations.GetDocumentationResponse>;
    /**
     * Incremental Refresh a source object
    **/
    IncrementalRefreshSource(req: operations.IncrementalRefreshSourceRequest, config?: AxiosRequestConfig): Promise<operations.IncrementalRefreshSourceResponse>;
    /**
     * Returns an array of ServiceCredentialType objects
    **/
    ListServiceCredentialTypes(req: operations.ListServiceCredentialTypesRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceCredentialTypesResponse>;
    /**
     * Returns an array of ServiceCredential objects
    **/
    ListServiceCredentials(req: operations.ListServiceCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceCredentialsResponse>;
    /**
     * Returns an array of ServiceInstance objects
    **/
    ListServiceInstances(req: operations.ListServiceInstancesRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceInstancesResponse>;
    /**
     * Returns an array of ServiceInventory objects
    **/
    ListServiceInventories(req: operations.ListServiceInventoriesRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceInventoriesResponse>;
    /**
     * Returns an array of Tag objects
    **/
    ListServiceInventoryTags(req: operations.ListServiceInventoryTagsRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceInventoryTagsResponse>;
    /**
     * Returns an array of ServiceOfferingNode objects
    **/
    ListServiceOfferingNodes(req: operations.ListServiceOfferingNodesRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceOfferingNodesResponse>;
    /**
     * Returns an array of ServiceInstance objects
    **/
    ListServiceOfferingServiceInstances(req: operations.ListServiceOfferingServiceInstancesRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceOfferingServiceInstancesResponse>;
    /**
     * Returns an array of ServiceOfferingNode objects
    **/
    ListServiceOfferingServiceOfferingNodes(req: operations.ListServiceOfferingServiceOfferingNodesRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceOfferingServiceOfferingNodesResponse>;
    /**
     * Returns an array of ServicePlan objects
    **/
    ListServiceOfferingServicePlans(req: operations.ListServiceOfferingServicePlansRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceOfferingServicePlansResponse>;
    /**
     * Returns an array of ServiceOffering objects
    **/
    ListServiceOfferings(req: operations.ListServiceOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceOfferingsResponse>;
    /**
     * Returns an array of ServicePlan objects
    **/
    ListServicePlans(req: operations.ListServicePlansRequest, config?: AxiosRequestConfig): Promise<operations.ListServicePlansResponse>;
    /**
     * Returns an array of ServiceInstance objects
    **/
    ListSourceServiceInstances(req: operations.ListSourceServiceInstancesRequest, config?: AxiosRequestConfig): Promise<operations.ListSourceServiceInstancesResponse>;
    /**
     * Returns an array of ServiceInventory objects
    **/
    ListSourceServiceInventories(req: operations.ListSourceServiceInventoriesRequest, config?: AxiosRequestConfig): Promise<operations.ListSourceServiceInventoriesResponse>;
    /**
     * Returns an array of ServiceOfferingNode objects
    **/
    ListSourceServiceOfferingNodes(req: operations.ListSourceServiceOfferingNodesRequest, config?: AxiosRequestConfig): Promise<operations.ListSourceServiceOfferingNodesResponse>;
    /**
     * Returns an array of ServiceOffering objects
    **/
    ListSourceServiceOfferings(req: operations.ListSourceServiceOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.ListSourceServiceOfferingsResponse>;
    /**
     * Returns an array of ServicePlan objects
    **/
    ListSourceServicePlans(req: operations.ListSourceServicePlansRequest, config?: AxiosRequestConfig): Promise<operations.ListSourceServicePlansResponse>;
    /**
     * Returns an array of Task objects
    **/
    ListSourceTasks(req: operations.ListSourceTasksRequest, config?: AxiosRequestConfig): Promise<operations.ListSourceTasksResponse>;
    /**
     * Returns an array of Source objects
    **/
    ListSources(req: operations.ListSourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListSourcesResponse>;
    /**
     * Returns an array of Tag objects
    **/
    ListTags(req: operations.ListTagsRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsResponse>;
    /**
     * Returns an array of Task objects
    **/
    ListTasks(req: operations.ListTasksRequest, config?: AxiosRequestConfig): Promise<operations.ListTasksResponse>;
    /**
     * Returns a Task id
    **/
    OrderServiceOffering(req: operations.OrderServiceOfferingRequest, config?: AxiosRequestConfig): Promise<operations.OrderServiceOfferingResponse>;
    /**
     * Performs a GraphQL Query
    **/
    PostGraphQl(req: operations.PostGraphQlRequest, config?: AxiosRequestConfig): Promise<operations.PostGraphQlResponse>;
    /**
     * Refresh a source object
    **/
    RefreshSource(req: operations.RefreshSourceRequest, config?: AxiosRequestConfig): Promise<operations.RefreshSourceResponse>;
    /**
     * Returns a ServiceCredential object
    **/
    ShowServiceCredential(req: operations.ShowServiceCredentialRequest, config?: AxiosRequestConfig): Promise<operations.ShowServiceCredentialResponse>;
    /**
     * Returns a ServiceCredentialType object
    **/
    ShowServiceCredentialType(req: operations.ShowServiceCredentialTypeRequest, config?: AxiosRequestConfig): Promise<operations.ShowServiceCredentialTypeResponse>;
    /**
     * Returns a ServiceInstance object
    **/
    ShowServiceInstance(req: operations.ShowServiceInstanceRequest, config?: AxiosRequestConfig): Promise<operations.ShowServiceInstanceResponse>;
    /**
     * Returns a ServiceInventory object
    **/
    ShowServiceInventory(req: operations.ShowServiceInventoryRequest, config?: AxiosRequestConfig): Promise<operations.ShowServiceInventoryResponse>;
    /**
     * Returns a ServiceOffering object
    **/
    ShowServiceOffering(req: operations.ShowServiceOfferingRequest, config?: AxiosRequestConfig): Promise<operations.ShowServiceOfferingResponse>;
    /**
     * Returns a ServiceOfferingNode object
    **/
    ShowServiceOfferingNode(req: operations.ShowServiceOfferingNodeRequest, config?: AxiosRequestConfig): Promise<operations.ShowServiceOfferingNodeResponse>;
    /**
     * Returns a ServicePlan object
    **/
    ShowServicePlan(req: operations.ShowServicePlanRequest, config?: AxiosRequestConfig): Promise<operations.ShowServicePlanResponse>;
    /**
     * Returns a Source object
    **/
    ShowSource(req: operations.ShowSourceRequest, config?: AxiosRequestConfig): Promise<operations.ShowSourceResponse>;
    /**
     * Returns a Task object
    **/
    ShowTask(req: operations.ShowTaskRequest, config?: AxiosRequestConfig): Promise<operations.ShowTaskResponse>;
    /**
     * Tags a ServiceInventory object
    **/
    TagServiceInventory(req: operations.TagServiceInventoryRequest, config?: AxiosRequestConfig): Promise<operations.TagServiceInventoryResponse>;
    /**
     * Untags a ServiceInventory object
    **/
    UntagServiceInventory(req: operations.UntagServiceInventoryRequest, config?: AxiosRequestConfig): Promise<operations.UntagServiceInventoryResponse>;
    /**
     * Updates a Task object
    **/
    UpdateTask(req: operations.UpdateTaskRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTaskResponse>;
}
export {};
