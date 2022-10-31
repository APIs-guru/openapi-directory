package operations

import (
"openapi/pkg/models/shared")

type PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceCreationValidatePathParams struct {
    ProviderNamespace string `pathParam:"style=simple,explode=false,name=providerNamespace"`
    ResourceGroup string `pathParam:"style=simple,explode=false,name=resourceGroup"`
    ResourceName string `pathParam:"style=simple,explode=false,name=resourceName"`
    ResourceType string `pathParam:"style=simple,explode=false,name=resourceType"`
    SubscriptionID string `pathParam:"style=simple,explode=false,name=subscriptionId"`
    
}

type PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceCreationValidateRequests struct {
    PlanResource *shared.PlanResource `request:"mediaType=application/*+json"`
    PlanResource1 *shared.PlanResource `request:"mediaType=application/json"`
    PlanResource2 *shared.PlanResource `request:"mediaType=application/json-patch+json"`
    PlanResource3 *shared.PlanResource `request:"mediaType=text/json"`
    
}

type PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceCreationValidateRequest struct {
    PathParams PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceCreationValidatePathParams 
    Request *PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceCreationValidateRequests 
    
}

type PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourceCreationValidateResponse struct {
    ContentType string 
    StatusCode int64 
    
}

