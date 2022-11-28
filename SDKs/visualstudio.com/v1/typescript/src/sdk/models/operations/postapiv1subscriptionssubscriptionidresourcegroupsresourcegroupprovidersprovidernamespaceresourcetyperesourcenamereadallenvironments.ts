import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadAllEnvironmentsPathParams extends SpeakeasyBase {
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


export class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadAllEnvironmentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expiration" })
  expiration?: Date;
}


export class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadAllEnvironmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadAllEnvironmentsPathParams;

  @SpeakeasyMetadata()
  queryParams: PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadAllEnvironmentsQueryParams;
}


export class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadAllEnvironmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
