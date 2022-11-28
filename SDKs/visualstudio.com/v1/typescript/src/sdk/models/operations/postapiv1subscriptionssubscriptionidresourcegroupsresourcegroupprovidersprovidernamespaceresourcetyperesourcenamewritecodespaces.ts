import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteCodespacesPathParams extends SpeakeasyBase {
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


export class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteCodespacesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expiration" })
  expiration?: Date;
}


export class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteCodespacesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteCodespacesPathParams;

  @SpeakeasyMetadata()
  queryParams: PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteCodespacesQueryParams;
}


export class PostApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteCodespacesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
