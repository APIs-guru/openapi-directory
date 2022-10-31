package operations

import (
"openapi/pkg/models/shared")

type PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegatesPathParams struct {
    ProviderNamespace string `pathParam:"style=simple,explode=false,name=providerNamespace"`
    ResourceGroup string `pathParam:"style=simple,explode=false,name=resourceGroup"`
    ResourceName string `pathParam:"style=simple,explode=false,name=resourceName"`
    ResourceType string `pathParam:"style=simple,explode=false,name=resourceType"`
    SubscriptionID string `pathParam:"style=simple,explode=false,name=subscriptionId"`
    
}

type PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegatesRequests struct {
    IssueDelegatePlanAccessTokenBody *shared.IssueDelegatePlanAccessTokenBody `request:"mediaType=application/*+json"`
    IssueDelegatePlanAccessTokenBody1 *shared.IssueDelegatePlanAccessTokenBody `request:"mediaType=application/json"`
    IssueDelegatePlanAccessTokenBody2 *shared.IssueDelegatePlanAccessTokenBody `request:"mediaType=application/json-patch+json"`
    IssueDelegatePlanAccessTokenBody3 *shared.IssueDelegatePlanAccessTokenBody `request:"mediaType=text/json"`
    
}

type PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegatesRequest struct {
    PathParams PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegatesPathParams 
    Request *PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegatesRequests 
    
}

type PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegatesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

