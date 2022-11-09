import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=providerNamespace" })
  providerNamespace: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=resourceType" })
  resourceType: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: string;
}


export class PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  planResourceList?: shared.PlanResourceList;

  @Metadata({ data: "request, media_type=application/json" })
  planResourceList1?: shared.PlanResourceList;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  planResourceList2?: shared.PlanResourceList;

  @Metadata({ data: "request, media_type=text/json" })
  planResourceList3?: shared.PlanResourceList;
}


export class PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginPathParams;

  @Metadata()
  request?: PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginRequests;
}


export class PostApiV1SubscriptionsSubscriptionIdProvidersProviderNamespaceResourceTypeResourceReadBeginResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
