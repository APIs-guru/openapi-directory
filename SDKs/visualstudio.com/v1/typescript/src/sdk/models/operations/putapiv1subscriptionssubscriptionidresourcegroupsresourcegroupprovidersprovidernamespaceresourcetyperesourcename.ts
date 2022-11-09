import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNamePathParams extends SpeakeasyBase {
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


export class PutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=headers" })
  headers?: shared.PlanResourceHeaders;
}


export class PutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  planResource?: shared.PlanResource;

  @Metadata({ data: "request, media_type=application/json" })
  planResource1?: shared.PlanResource;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  planResource2?: shared.PlanResource;

  @Metadata({ data: "request, media_type=text/json" })
  planResource3?: shared.PlanResource;
}


export class PutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNamePathParams;

  @Metadata()
  headers: PutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameHeaders;

  @Metadata()
  request?: PutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameRequests;
}


export class PutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
