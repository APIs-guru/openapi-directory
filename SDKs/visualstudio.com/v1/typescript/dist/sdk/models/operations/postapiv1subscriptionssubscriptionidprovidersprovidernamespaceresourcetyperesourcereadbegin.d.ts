import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginPathParams extends SpeakeasyBase {
    providerNamespace: string;
    resourceType: string;
    subscriptionId: string;
}
export declare class PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginRequests extends SpeakeasyBase {
    planResourceList?: shared.PlanResourceList;
    planResourceList1?: shared.PlanResourceList;
    planResourceList2?: shared.PlanResourceList;
    planResourceList3?: shared.PlanResourceList;
}
export declare class PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginRequest extends SpeakeasyBase {
    pathParams: PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginPathParams;
    request?: PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginRequests;
}
export declare class PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
