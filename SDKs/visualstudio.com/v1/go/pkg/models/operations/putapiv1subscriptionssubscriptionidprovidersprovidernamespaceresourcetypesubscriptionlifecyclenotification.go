package operations

import (
"openapi/pkg/models/shared")

type PutAPIV1SubscriptionsSubscriptionIDProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationPathParams struct {
    ProviderNamespace string `pathParam:"style=simple,explode=false,name=providerNamespace"`
    ResourceType string `pathParam:"style=simple,explode=false,name=resourceType"`
    SubscriptionID string `pathParam:"style=simple,explode=false,name=subscriptionId"`
    
}

type PutAPIV1SubscriptionsSubscriptionIDProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequests struct {
    RpSubscriptionNotification *shared.RpSubscriptionNotification `request:"mediaType=application/*+json"`
    RpSubscriptionNotification1 *shared.RpSubscriptionNotification `request:"mediaType=application/json"`
    RpSubscriptionNotification2 *shared.RpSubscriptionNotification `request:"mediaType=application/json-patch+json"`
    RpSubscriptionNotification3 *shared.RpSubscriptionNotification `request:"mediaType=text/json"`
    
}

type PutAPIV1SubscriptionsSubscriptionIDProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequest struct {
    PathParams PutAPIV1SubscriptionsSubscriptionIDProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationPathParams 
    Request *PutAPIV1SubscriptionsSubscriptionIDProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequests 
    
}

type PutAPIV1SubscriptionsSubscriptionIDProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

