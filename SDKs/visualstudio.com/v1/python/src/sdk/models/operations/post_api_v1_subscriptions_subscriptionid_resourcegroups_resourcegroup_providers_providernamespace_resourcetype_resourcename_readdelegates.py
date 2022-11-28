from dataclasses import dataclass, field



@dataclass
class PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadDelegatesPathParams:
    provider_namespace: str = field(metadata={'path_param': { 'field_name': 'providerNamespace', 'style': 'simple', 'explode': False }})
    resource_group: str = field(metadata={'path_param': { 'field_name': 'resourceGroup', 'style': 'simple', 'explode': False }})
    resource_name: str = field(metadata={'path_param': { 'field_name': 'resourceName', 'style': 'simple', 'explode': False }})
    resource_type: str = field(metadata={'path_param': { 'field_name': 'resourceType', 'style': 'simple', 'explode': False }})
    subscription_id: str = field(metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadDelegatesRequest:
    path_params: PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadDelegatesPathParams = field()
    

@dataclass
class PostAPIV1SubscriptionsSubscriptionIDResourceGroupsResourceGroupProvidersProviderNamespaceResourceTypeResourceNameReadDelegatesResponse:
    content_type: str = field()
    status_code: int = field()
    
