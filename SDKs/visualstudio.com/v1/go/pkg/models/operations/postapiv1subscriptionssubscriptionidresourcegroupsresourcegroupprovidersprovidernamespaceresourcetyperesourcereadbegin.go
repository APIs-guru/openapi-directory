package operations

import (
	"openapi/pkg/models/shared"
)

type PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceReadBeginPathParams struct {
	ProviderNamespace string `pathParam:"style=simple,explode=false,name=providerNamespace"`
	ResourceGroup     string `pathParam:"style=simple,explode=false,name=resourceGroup"`
	ResourceType      string `pathParam:"style=simple,explode=false,name=resourceType"`
	SubscriptionID    string `pathParam:"style=simple,explode=false,name=subscriptionId"`
}

type PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceReadBeginRequests struct {
	PlanResourceList  *shared.PlanResourceList `request:"mediaType=application/*+json"`
	PlanResourceList1 *shared.PlanResourceList `request:"mediaType=application/json"`
	PlanResourceList2 *shared.PlanResourceList `request:"mediaType=application/json-patch+json"`
	PlanResourceList3 *shared.PlanResourceList `request:"mediaType=text/json"`
}

type PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceReadBeginRequest struct {
	PathParams PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceReadBeginPathParams
	Request    *PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceReadBeginRequests
}

type PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceReadBeginResponse struct {
	ContentType string
	StatusCode  int64
}
