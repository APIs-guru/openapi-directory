package operations

import (
"openapi/pkg/models/shared")

type PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceReadBeginPathParams struct {
    ProviderNamespace string `pathParam:"style=simple,explode=false,name=providerNamespace"`
    ResourceGroup string `pathParam:"style=simple,explode=false,name=resourceGroup"`
    ResourceName string `pathParam:"style=simple,explode=false,name=resourceName"`
    ResourceType string `pathParam:"style=simple,explode=false,name=resourceType"`
    SubscriptionID string `pathParam:"style=simple,explode=false,name=subscriptionId"`
    
}

type PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceReadBeginRequests struct {
    PlanResource *shared.PlanResource `request:"mediaType=application/*+json"`
    PlanResource1 *shared.PlanResource `request:"mediaType=application/json"`
    PlanResource2 *shared.PlanResource `request:"mediaType=application/json-patch+json"`
    PlanResource3 *shared.PlanResource `request:"mediaType=text/json"`
    
}

type PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceReadBeginRequest struct {
    PathParams PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceReadBeginPathParams 
    Request *PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceReadBeginRequests 
    
}

type PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceReadBeginResponse struct {
    ContentType string 
    StatusCode int64 
    
}

