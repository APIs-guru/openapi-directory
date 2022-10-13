from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ServicePrincipalsGetPathParams:
    object_id: str = field(default=None, metadata={'path_param': { 'field_name': 'objectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ServicePrincipalsGetQueryParams:
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class ServicePrincipalsGetRequest:
    path_params: ServicePrincipalsGetPathParams = field(default=None)
    query_params: ServicePrincipalsGetQueryParams = field(default=None)
    

@dataclass
class ServicePrincipalsGetResponse:
    content_type: str = field(default=None)
    graph_error: Optional[shared.GraphError] = field(default=None)
    service_principal: Optional[dict[str, dict[str, Any]]] = field(default=None)
    status_code: int = field(default=None)
    
