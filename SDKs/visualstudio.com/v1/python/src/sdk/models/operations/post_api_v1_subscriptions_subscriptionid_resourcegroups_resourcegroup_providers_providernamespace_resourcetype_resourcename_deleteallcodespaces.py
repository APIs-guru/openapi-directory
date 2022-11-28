from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllCodespacesPathParams:
    provider_namespace: str = field(metadata={'path_param': { 'field_name': 'providerNamespace', 'style': 'simple', 'explode': False }})
    resource_group: str = field(metadata={'path_param': { 'field_name': 'resourceGroup', 'style': 'simple', 'explode': False }})
    resource_name: str = field(metadata={'path_param': { 'field_name': 'resourceName', 'style': 'simple', 'explode': False }})
    resource_type: str = field(metadata={'path_param': { 'field_name': 'resourceType', 'style': 'simple', 'explode': False }})
    subscription_id: str = field(metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllCodespacesQueryParams:
    expiration: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'expiration', 'style': 'form', 'explode': True }})
    

@dataclass
class PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllCodespacesRequest:
    path_params: PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllCodespacesPathParams = field()
    query_params: PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllCodespacesQueryParams = field()
    

@dataclass
class PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameDeleteAllCodespacesResponse:
    content_type: str = field()
    status_code: int = field()
    
