package operations

import (
	"openapi/pkg/models/shared"
)

type PostAPIV1SubscriptionsSubscriptionIDProvidersProviderNamespaceResourceTypeResourceReadBeginPathParams struct {
	ProviderNamespace string `pathParam:"style=simple,explode=false,name=providerNamespace"`
	ResourceType      string `pathParam:"style=simple,explode=false,name=resourceType"`
	SubscriptionID    string `pathParam:"style=simple,explode=false,name=subscriptionId"`
}

type PostAPIV1SubscriptionsSubscriptionIDProvidersProviderNamespaceResourceTypeResourceReadBeginRequests struct {
	PlanResourceList  *shared.PlanResourceList `request:"mediaType=application/*+json"`
	PlanResourceList1 *shared.PlanResourceList `request:"mediaType=application/json"`
	PlanResourceList2 *shared.PlanResourceList `request:"mediaType=application/json-patch+json"`
	PlanResourceList3 *shared.PlanResourceList `request:"mediaType=text/json"`
}

type PostAPIV1SubscriptionsSubscriptionIDProvidersProviderNamespaceResourceTypeResourceReadBeginRequest struct {
	PathParams PostAPIV1SubscriptionsSubscriptionIDProvidersProviderNamespaceResourceTypeResourceReadBeginPathParams
	Request    *PostAPIV1SubscriptionsSubscriptionIDProvidersProviderNamespaceResourceTypeResourceReadBeginRequests
}

type PostAPIV1SubscriptionsSubscriptionIDProvidersProviderNamespaceResourceTypeResourceReadBeginResponse struct {
	ContentType string
	StatusCode  int64
}
