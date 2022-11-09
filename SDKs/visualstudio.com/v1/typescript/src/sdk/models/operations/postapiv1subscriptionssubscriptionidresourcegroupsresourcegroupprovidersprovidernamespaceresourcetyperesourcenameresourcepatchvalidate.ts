import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchValidatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=providerNamespace" })
  providerNamespace: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=resourceGroup" })
  resourceGroup: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=resourceName" })
  resourceName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=resourceType" })
  resourceType: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: string;
}


export class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchValidateRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  planResourceUpdateBody?: shared.PlanResourceUpdateBody;

  @Metadata({ data: "request, media_type=application/json" })
  planResourceUpdateBody1?: shared.PlanResourceUpdateBody;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  planResourceUpdateBody2?: shared.PlanResourceUpdateBody;

  @Metadata({ data: "request, media_type=text/json" })
  planResourceUpdateBody3?: shared.PlanResourceUpdateBody;
}


export class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchValidateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchValidatePathParams;

  @Metadata()
  request?: PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchValidateRequests;
}


export class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchValidateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
