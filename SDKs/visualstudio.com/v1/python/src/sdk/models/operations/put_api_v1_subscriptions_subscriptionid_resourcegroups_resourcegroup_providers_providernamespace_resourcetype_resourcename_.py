from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNamePathParams:
    provider_namespace: str = field(default=None, metadata={'path_param': { 'field_name': 'providerNamespace', 'style': 'simple', 'explode': False }})
    resource_group: str = field(default=None, metadata={'path_param': { 'field_name': 'resourceGroup', 'style': 'simple', 'explode': False }})
    resource_name: str = field(default=None, metadata={'path_param': { 'field_name': 'resourceName', 'style': 'simple', 'explode': False }})
    resource_type: str = field(default=None, metadata={'path_param': { 'field_name': 'resourceType', 'style': 'simple', 'explode': False }})
    subscription_id: str = field(default=None, metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameHeaders:
    headers: Optional[shared.PlanResourceHeaders] = field(default=None, metadata={'header': { 'field_name': 'headers', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameRequests:
    plan_resource: Optional[shared.PlanResource] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    plan_resource1: Optional[shared.PlanResource] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    plan_resource2: Optional[shared.PlanResource] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    plan_resource3: Optional[shared.PlanResource] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameRequest:
    path_params: PutAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNamePathParams = field(default=None)
    headers: PutAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameHeaders = field(default=None)
    request: Optional[PutAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameRequests] = field(default=None)
    

@dataclass
class PutAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
