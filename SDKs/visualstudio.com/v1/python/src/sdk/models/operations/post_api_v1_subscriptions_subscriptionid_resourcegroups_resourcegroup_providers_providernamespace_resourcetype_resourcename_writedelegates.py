from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegatesPathParams:
    provider_namespace: str = field(metadata={'path_param': { 'field_name': 'providerNamespace', 'style': 'simple', 'explode': False }})
    resource_group: str = field(metadata={'path_param': { 'field_name': 'resourceGroup', 'style': 'simple', 'explode': False }})
    resource_name: str = field(metadata={'path_param': { 'field_name': 'resourceName', 'style': 'simple', 'explode': False }})
    resource_type: str = field(metadata={'path_param': { 'field_name': 'resourceType', 'style': 'simple', 'explode': False }})
    subscription_id: str = field(metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegatesRequests:
    issue_delegate_plan_access_token_body: Optional[shared.IssueDelegatePlanAccessTokenBody] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    issue_delegate_plan_access_token_body1: Optional[shared.IssueDelegatePlanAccessTokenBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    issue_delegate_plan_access_token_body2: Optional[shared.IssueDelegatePlanAccessTokenBody] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    issue_delegate_plan_access_token_body3: Optional[shared.IssueDelegatePlanAccessTokenBody] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegatesRequest:
    path_params: PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegatesPathParams = field()
    request: Optional[PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegatesRequests] = field(default=None)
    

@dataclass
class PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteDelegatesResponse:
    content_type: str = field()
    status_code: int = field()
    
