import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNamePathParams extends SpeakeasyBase {
    providerNamespace: string;
    resourceGroup: string;
    resourceName: string;
    resourceType: string;
    subscriptionId: string;
}
export declare class PutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameHeaders extends SpeakeasyBase {
    headers?: shared.PlanResourceHeaders;
}
export declare class PutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameRequests extends SpeakeasyBase {
    planResource?: shared.PlanResource;
    planResource1?: shared.PlanResource;
    planResource2?: shared.PlanResource;
    planResource3?: shared.PlanResource;
}
export declare class PutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameRequest extends SpeakeasyBase {
    pathParams: PutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNamePathParams;
    headers: PutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameHeaders;
    request?: PutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameRequests;
}
export declare class PutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
