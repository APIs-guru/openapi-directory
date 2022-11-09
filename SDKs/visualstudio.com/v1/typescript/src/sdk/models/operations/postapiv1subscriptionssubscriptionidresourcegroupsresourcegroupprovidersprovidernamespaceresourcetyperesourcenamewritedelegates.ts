import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegatesPathParams extends SpeakeasyBase {
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


export class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegatesRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  issueDelegatePlanAccessTokenBody?: shared.IssueDelegatePlanAccessTokenBody;

  @Metadata({ data: "request, media_type=application/json" })
  issueDelegatePlanAccessTokenBody1?: shared.IssueDelegatePlanAccessTokenBody;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  issueDelegatePlanAccessTokenBody2?: shared.IssueDelegatePlanAccessTokenBody;

  @Metadata({ data: "request, media_type=text/json" })
  issueDelegatePlanAccessTokenBody3?: shared.IssueDelegatePlanAccessTokenBody;
}


export class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegatesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegatesPathParams;

  @Metadata()
  request?: PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegatesRequests;
}


export class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
