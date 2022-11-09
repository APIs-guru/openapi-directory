import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=providerNamespace" })
  providerNamespace: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=resourceType" })
  resourceType: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: string;
}


export class PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  rpSubscriptionNotification?: shared.RpSubscriptionNotification;

  @Metadata({ data: "request, media_type=application/json" })
  rpSubscriptionNotification1?: shared.RpSubscriptionNotification;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  rpSubscriptionNotification2?: shared.RpSubscriptionNotification;

  @Metadata({ data: "request, media_type=text/json" })
  rpSubscriptionNotification3?: shared.RpSubscriptionNotification;
}


export class PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationPathParams;

  @Metadata()
  request?: PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequests;
}


export class PutApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
