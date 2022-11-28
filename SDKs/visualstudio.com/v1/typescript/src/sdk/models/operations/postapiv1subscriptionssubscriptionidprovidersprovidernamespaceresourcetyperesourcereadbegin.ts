import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=providerNamespace" })
  providerNamespace: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceType" })
  resourceType: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: string;
}


export class PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  planResourceList?: shared.PlanResourceList;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  planResourceList1?: shared.PlanResourceList;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  planResourceList2?: shared.PlanResourceList;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  planResourceList3?: shared.PlanResourceList;
}


export class PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginPathParams;

  @SpeakeasyMetadata()
  request?: PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginRequests;
}


export class PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
