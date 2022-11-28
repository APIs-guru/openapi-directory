import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNamePathParams extends SpeakeasyBase {
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


export class PutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=headers" })
  headers?: shared.PlanResourceHeaders;
}


export class PutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  planResource?: shared.PlanResource;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  planResource1?: shared.PlanResource;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  planResource2?: shared.PlanResource;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  planResource3?: shared.PlanResource;
}


export class PutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNamePathParams;

  @SpeakeasyMetadata()
  headers: PutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameHeaders;

  @SpeakeasyMetadata()
  request?: PutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameRequests;
}


export class PutApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
