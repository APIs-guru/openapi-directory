from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutAPIV1SubscriptionsSubscriptionIDProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationPathParams:
    provider_namespace: str = field(default=None, metadata={'path_param': { 'field_name': 'providerNamespace', 'style': 'simple', 'explode': False }})
    resource_type: str = field(default=None, metadata={'path_param': { 'field_name': 'resourceType', 'style': 'simple', 'explode': False }})
    subscription_id: str = field(default=None, metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAPIV1SubscriptionsSubscriptionIDProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequests:
    rp_subscription_notification: Optional[shared.RpSubscriptionNotification] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    rp_subscription_notification1: Optional[shared.RpSubscriptionNotification] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    rp_subscription_notification2: Optional[shared.RpSubscriptionNotification] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    rp_subscription_notification3: Optional[shared.RpSubscriptionNotification] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutAPIV1SubscriptionsSubscriptionIDProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequest:
    path_params: PutAPIV1SubscriptionsSubscriptionIDProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationPathParams = field(default=None)
    request: Optional[PutAPIV1SubscriptionsSubscriptionIDProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationRequests] = field(default=None)
    

@dataclass
class PutAPIV1SubscriptionsSubscriptionIDProvidersProviderNamespaceResourceTypeSubscriptionLifeCycleNotificationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
