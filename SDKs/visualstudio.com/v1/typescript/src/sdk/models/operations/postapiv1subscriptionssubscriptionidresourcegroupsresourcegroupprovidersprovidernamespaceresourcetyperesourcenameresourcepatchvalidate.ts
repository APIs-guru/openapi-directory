import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchValidatePathParams extends SpeakeasyBase {
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


export class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchValidateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  planResourceUpdateBody?: shared.PlanResourceUpdateBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  planResourceUpdateBody1?: shared.PlanResourceUpdateBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  planResourceUpdateBody2?: shared.PlanResourceUpdateBody;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  planResourceUpdateBody3?: shared.PlanResourceUpdateBody;
}


export class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchValidateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchValidatePathParams;

  @SpeakeasyMetadata()
  request?: PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchValidateRequests;
}


export class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchValidateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
