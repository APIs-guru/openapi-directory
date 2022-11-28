from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ServicePrincipalsAddOwnerPathParams:
    object_id: str = field(metadata={'path_param': { 'field_name': 'objectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ServicePrincipalsAddOwnerQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class ServicePrincipalsAddOwnerRequests:
    add_owner_parameters: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    add_owner_parameters1: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ServicePrincipalsAddOwnerRequest:
    path_params: ServicePrincipalsAddOwnerPathParams = field()
    query_params: ServicePrincipalsAddOwnerQueryParams = field()
    request: ServicePrincipalsAddOwnerRequests = field()
    

@dataclass
class ServicePrincipalsAddOwnerResponse:
    content_type: str = field()
    status_code: int = field()
    graph_error: Optional[shared.GraphError] = field(default=None)
    
