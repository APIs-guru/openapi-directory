from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceReadBeginPathParams:
    provider_namespace: str = field(metadata={'path_param': { 'field_name': 'providerNamespace', 'style': 'simple', 'explode': False }})
    resource_group: str = field(metadata={'path_param': { 'field_name': 'resourceGroup', 'style': 'simple', 'explode': False }})
    resource_type: str = field(metadata={'path_param': { 'field_name': 'resourceType', 'style': 'simple', 'explode': False }})
    subscription_id: str = field(metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceReadBeginRequests:
    plan_resource_list: Optional[shared.PlanResourceList] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    plan_resource_list1: Optional[shared.PlanResourceList] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    plan_resource_list2: Optional[shared.PlanResourceList] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    plan_resource_list3: Optional[shared.PlanResourceList] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceReadBeginRequest:
    path_params: PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceReadBeginPathParams = field()
    request: Optional[PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceReadBeginRequests] = field(default=None)
    

@dataclass
class PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceReadBeginResponse:
    content_type: str = field()
    status_code: int = field()
    
