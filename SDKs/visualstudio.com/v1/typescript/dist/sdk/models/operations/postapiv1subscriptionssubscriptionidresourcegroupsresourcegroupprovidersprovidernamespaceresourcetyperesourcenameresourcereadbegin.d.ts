import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceReadBeginPathParams extends SpeakeasyBase {
    providerNamespace: string;
    resourceGroup: string;
    resourceName: string;
    resourceType: string;
    subscriptionId: string;
}
export declare class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceReadBeginRequests extends SpeakeasyBase {
    planResource?: shared.PlanResource;
    planResource1?: shared.PlanResource;
    planResource2?: shared.PlanResource;
    planResource3?: shared.PlanResource;
}
export declare class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceReadBeginRequest extends SpeakeasyBase {
    pathParams: PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceReadBeginPathParams;
    request?: PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceReadBeginRequests;
}
export declare class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceReadBeginResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
