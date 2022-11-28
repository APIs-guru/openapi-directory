import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceReadBeginPathParams extends SpeakeasyBase {
    providerNamespace: string;
    resourceGroup: string;
    resourceType: string;
    subscriptionId: string;
}
export declare class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceReadBeginRequests extends SpeakeasyBase {
    planResourceList?: shared.PlanResourceList;
    planResourceList1?: shared.PlanResourceList;
    planResourceList2?: shared.PlanResourceList;
    planResourceList3?: shared.PlanResourceList;
}
export declare class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceReadBeginRequest extends SpeakeasyBase {
    pathParams: PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceReadBeginPathParams;
    request?: PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceReadBeginRequests;
}
export declare class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceReadBeginResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
