from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteCodespacesPathParams:
    provider_namespace: str = field(metadata={'path_param': { 'field_name': 'providerNamespace', 'style': 'simple', 'explode': False }})
    resource_group: str = field(metadata={'path_param': { 'field_name': 'resourceGroup', 'style': 'simple', 'explode': False }})
    resource_name: str = field(metadata={'path_param': { 'field_name': 'resourceName', 'style': 'simple', 'explode': False }})
    resource_type: str = field(metadata={'path_param': { 'field_name': 'resourceType', 'style': 'simple', 'explode': False }})
    subscription_id: str = field(metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteCodespacesQueryParams:
    expiration: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'expiration', 'style': 'form', 'explode': True }})
    

@dataclass
class PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteCodespacesRequest:
    path_params: PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteCodespacesPathParams = field()
    query_params: PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteCodespacesQueryParams = field()
    

@dataclass
class PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameWriteCodespacesResponse:
    content_type: str = field()
    status_code: int = field()
    
