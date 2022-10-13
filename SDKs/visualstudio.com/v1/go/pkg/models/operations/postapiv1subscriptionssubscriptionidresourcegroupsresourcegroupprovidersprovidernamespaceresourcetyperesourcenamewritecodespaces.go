package operations

import (
	"time"
)

type PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteCodespacesPathParams struct {
	ProviderNamespace string `pathParam:"style=simple,explode=false,name=providerNamespace"`
	ResourceGroup     string `pathParam:"style=simple,explode=false,name=resourceGroup"`
	ResourceName      string `pathParam:"style=simple,explode=false,name=resourceName"`
	ResourceType      string `pathParam:"style=simple,explode=false,name=resourceType"`
	SubscriptionID    string `pathParam:"style=simple,explode=false,name=subscriptionId"`
}

type PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteCodespacesQueryParams struct {
	Expiration *time.Time `queryParam:"style=form,explode=true,name=expiration"`
}

type PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteCodespacesRequest struct {
	PathParams  PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteCodespacesPathParams
	QueryParams PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteCodespacesQueryParams
}

type PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteCodespacesResponse struct {
	ContentType string
	StatusCode  int64
}
