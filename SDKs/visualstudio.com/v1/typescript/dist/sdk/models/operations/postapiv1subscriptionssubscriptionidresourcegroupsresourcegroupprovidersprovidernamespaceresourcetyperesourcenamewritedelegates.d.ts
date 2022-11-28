import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegatesPathParams extends SpeakeasyBase {
    providerNamespace: string;
    resourceGroup: string;
    resourceName: string;
    resourceType: string;
    subscriptionId: string;
}
export declare class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegatesRequests extends SpeakeasyBase {
    issueDelegatePlanAccessTokenBody?: shared.IssueDelegatePlanAccessTokenBody;
    issueDelegatePlanAccessTokenBody1?: shared.IssueDelegatePlanAccessTokenBody;
    issueDelegatePlanAccessTokenBody2?: shared.IssueDelegatePlanAccessTokenBody;
    issueDelegatePlanAccessTokenBody3?: shared.IssueDelegatePlanAccessTokenBody;
}
export declare class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegatesRequest extends SpeakeasyBase {
    pathParams: PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegatesPathParams;
    request?: PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegatesRequests;
}
export declare class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
