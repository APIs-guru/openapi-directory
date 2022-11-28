import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadAllEnvironmentsPathParams extends SpeakeasyBase {
    providerNamespace: string;
    resourceGroup: string;
    resourceName: string;
    resourceType: string;
    subscriptionId: string;
}
export declare class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadAllEnvironmentsQueryParams extends SpeakeasyBase {
    expiration?: Date;
}
export declare class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadAllEnvironmentsRequest extends SpeakeasyBase {
    pathParams: PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadAllEnvironmentsPathParams;
    queryParams: PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadAllEnvironmentsQueryParams;
}
export declare class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadAllEnvironmentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
