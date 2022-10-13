package operations

type PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceCreationCompletedPathParams struct {
	ProviderNamespace string `pathParam:"style=simple,explode=false,name=providerNamespace"`
	ResourceGroup     string `pathParam:"style=simple,explode=false,name=resourceGroup"`
	ResourceName      string `pathParam:"style=simple,explode=false,name=resourceName"`
	ResourceType      string `pathParam:"style=simple,explode=false,name=resourceType"`
	SubscriptionID    string `pathParam:"style=simple,explode=false,name=subscriptionId"`
}

type PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceCreationCompletedRequest struct {
	PathParams PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceCreationCompletedPathParams
}

type PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceCreationCompletedResponse struct {
	ContentType string
	StatusCode  int64
}
