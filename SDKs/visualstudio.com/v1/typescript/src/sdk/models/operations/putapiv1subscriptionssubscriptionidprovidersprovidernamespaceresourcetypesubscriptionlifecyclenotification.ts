import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=providerNamespace" })
  providerNamespace: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceType" })
  resourceType: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: string;
}


export class PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  rpSubscriptionNotification?: shared.RpSubscriptionNotification;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  rpSubscriptionNotification1?: shared.RpSubscriptionNotification;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  rpSubscriptionNotification2?: shared.RpSubscriptionNotification;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  rpSubscriptionNotification3?: shared.RpSubscriptionNotification;
}


export class PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationPathParams;

  @SpeakeasyMetadata()
  request?: PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequests;
}


export class PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
