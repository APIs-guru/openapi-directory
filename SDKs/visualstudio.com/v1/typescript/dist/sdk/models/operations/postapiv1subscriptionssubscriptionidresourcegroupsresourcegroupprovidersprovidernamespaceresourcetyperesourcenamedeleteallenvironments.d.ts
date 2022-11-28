import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsPathParams extends SpeakeasyBase {
    providerNamespace: string;
    resourceGroup: string;
    resourceName: string;
    resourceType: string;
    subscriptionId: string;
}
export declare class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsQueryParams extends SpeakeasyBase {
    expiration?: Date;
}
export declare class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsRequest extends SpeakeasyBase {
    pathParams: PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsPathParams;
    queryParams: PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsQueryParams;
}
export declare class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllEnvironmentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
