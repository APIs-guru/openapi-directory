package operations

import (
	"openapi/pkg/models/shared"
)

type PutAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNamePathParams struct {
	ProviderNamespace string `pathParam:"style=simple,explode=false,name=providerNamespace"`
	ResourceGroup     string `pathParam:"style=simple,explode=false,name=resourceGroup"`
	ResourceName      string `pathParam:"style=simple,explode=false,name=resourceName"`
	ResourceType      string `pathParam:"style=simple,explode=false,name=resourceType"`
	SubscriptionID    string `pathParam:"style=simple,explode=false,name=subscriptionId"`
}

type PutAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameHeaders struct {
	Headers *shared.PlanResourceHeaders `header:"style=simple,explode=false,name=headers"`
}

type PutAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameRequests struct {
	PlanResource  *shared.PlanResource `request:"mediaType=application/*+json"`
	PlanResource1 *shared.PlanResource `request:"mediaType=application/json"`
	PlanResource2 *shared.PlanResource `request:"mediaType=application/json-patch+json"`
	PlanResource3 *shared.PlanResource `request:"mediaType=text/json"`
}

type PutAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameRequest struct {
	PathParams PutAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNamePathParams
	Headers    PutAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameHeaders
	Request    *PutAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameRequests
}

type PutAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResponse struct {
	ContentType string
	StatusCode  int64
}
