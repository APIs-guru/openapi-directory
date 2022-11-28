from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchCompletedPathParams:
    provider_namespace: str = field(metadata={'path_param': { 'field_name': 'providerNamespace', 'style': 'simple', 'explode': False }})
    resource_group: str = field(metadata={'path_param': { 'field_name': 'resourceGroup', 'style': 'simple', 'explode': False }})
    resource_name: str = field(metadata={'path_param': { 'field_name': 'resourceName', 'style': 'simple', 'explode': False }})
    resource_type: str = field(metadata={'path_param': { 'field_name': 'resourceType', 'style': 'simple', 'explode': False }})
    subscription_id: str = field(metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchCompletedHeaders:
    headers: Optional[shared.PlanResourceHeaders] = field(default=None, metadata={'header': { 'field_name': 'headers', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchCompletedRequests:
    plan_resource_update_body: Optional[shared.PlanResourceUpdateBody] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    plan_resource_update_body1: Optional[shared.PlanResourceUpdateBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    plan_resource_update_body2: Optional[shared.PlanResourceUpdateBody] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    plan_resource_update_body3: Optional[shared.PlanResourceUpdateBody] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchCompletedRequest:
    headers: PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchCompletedHeaders = field()
    path_params: PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchCompletedPathParams = field()
    request: Optional[PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchCompletedRequests] = field(default=None)
    

@dataclass
class PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameResourcePatchCompletedResponse:
    content_type: str = field()
    status_code: int = field()
    
