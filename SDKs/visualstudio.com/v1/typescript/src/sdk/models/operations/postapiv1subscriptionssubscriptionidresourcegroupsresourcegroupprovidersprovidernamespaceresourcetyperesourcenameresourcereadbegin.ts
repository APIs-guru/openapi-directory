import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceReadBeginPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=providerNamespace" })
  providerNamespace: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceGroup" })
  resourceGroup: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceName" })
  resourceName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceType" })
  resourceType: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: string;
}


export class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceReadBeginRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  planResource?: shared.PlanResource;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  planResource1?: shared.PlanResource;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  planResource2?: shared.PlanResource;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  planResource3?: shared.PlanResource;
}


export class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceReadBeginRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceReadBeginPathParams;

  @SpeakeasyMetadata()
  request?: PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceReadBeginRequests;
}


export class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceReadBeginResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
