from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ServicePrincipalsDeletePathParams:
    object_id: str = field(metadata={'path_param': { 'field_name': 'objectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ServicePrincipalsDeleteQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class ServicePrincipalsDeleteRequest:
    path_params: ServicePrincipalsDeletePathParams = field()
    query_params: ServicePrincipalsDeleteQueryParams = field()
    

@dataclass
class ServicePrincipalsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    graph_error: Optional[shared.GraphError] = field(default=None)
    
