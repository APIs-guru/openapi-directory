package operations

import (
	"openapi/pkg/models/shared"
)

type PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchCompletedPathParams struct {
	ProviderNamespace string `pathParam:"style=simple,explode=false,name=providerNamespace"`
	ResourceGroup     string `pathParam:"style=simple,explode=false,name=resourceGroup"`
	ResourceName      string `pathParam:"style=simple,explode=false,name=resourceName"`
	ResourceType      string `pathParam:"style=simple,explode=false,name=resourceType"`
	SubscriptionID    string `pathParam:"style=simple,explode=false,name=subscriptionId"`
}

type PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchCompletedHeaders struct {
	Headers *shared.PlanResourceHeaders `header:"name=headers"`
}

type PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchCompletedRequests struct {
	PlanResourceUpdateBody  *shared.PlanResourceUpdateBody `request:"mediaType=application/*+json"`
	PlanResourceUpdateBody1 *shared.PlanResourceUpdateBody `request:"mediaType=application/json"`
	PlanResourceUpdateBody2 *shared.PlanResourceUpdateBody `request:"mediaType=application/json-patch+json"`
	PlanResourceUpdateBody3 *shared.PlanResourceUpdateBody `request:"mediaType=text/json"`
}

type PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchCompletedRequest struct {
	PathParams PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchCompletedPathParams
	Headers    PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchCompletedHeaders
	Request    *PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchCompletedRequests
}

type PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchCompletedResponse struct {
	ContentType string
	StatusCode  int64
}
