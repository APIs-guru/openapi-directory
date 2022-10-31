package operations

import (
"openapi/pkg/models/shared")

type PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchValidatePathParams struct {
    ProviderNamespace string `pathParam:"style=simple,explode=false,name=providerNamespace"`
    ResourceGroup string `pathParam:"style=simple,explode=false,name=resourceGroup"`
    ResourceName string `pathParam:"style=simple,explode=false,name=resourceName"`
    ResourceType string `pathParam:"style=simple,explode=false,name=resourceType"`
    SubscriptionID string `pathParam:"style=simple,explode=false,name=subscriptionId"`
    
}

type PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchValidateRequests struct {
    PlanResourceUpdateBody *shared.PlanResourceUpdateBody `request:"mediaType=application/*+json"`
    PlanResourceUpdateBody1 *shared.PlanResourceUpdateBody `request:"mediaType=application/json"`
    PlanResourceUpdateBody2 *shared.PlanResourceUpdateBody `request:"mediaType=application/json-patch+json"`
    PlanResourceUpdateBody3 *shared.PlanResourceUpdateBody `request:"mediaType=text/json"`
    
}

type PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchValidateRequest struct {
    PathParams PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchValidatePathParams 
    Request *PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchValidateRequests 
    
}

type PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchValidateResponse struct {
    ContentType string 
    StatusCode int64 
    
}

