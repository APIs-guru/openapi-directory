import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationPathParams extends SpeakeasyBase {
    providerNamespace: string;
    resourceType: string;
    subscriptionId: string;
}
export declare class PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequests extends SpeakeasyBase {
    rpSubscriptionNotification?: shared.RpSubscriptionNotification;
    rpSubscriptionNotification1?: shared.RpSubscriptionNotification;
    rpSubscriptionNotification2?: shared.RpSubscriptionNotification;
    rpSubscriptionNotification3?: shared.RpSubscriptionNotification;
}
export declare class PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequest extends SpeakeasyBase {
    pathParams: PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationPathParams;
    request?: PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequests;
}
export declare class PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
