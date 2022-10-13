from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ServicePrincipalsCreatePathParams:
    tenant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ServicePrincipalsCreateQueryParams:
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class ServicePrincipalsCreateRequests:
    service_principal_create_parameters: Optional[shared.ServicePrincipalCreateParameters] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    service_principal_create_parameters1: Optional[shared.ServicePrincipalCreateParameters] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ServicePrincipalsCreateRequest:
    path_params: ServicePrincipalsCreatePathParams = field(default=None)
    query_params: ServicePrincipalsCreateQueryParams = field(default=None)
    request: ServicePrincipalsCreateRequests = field(default=None)
    

@dataclass
class ServicePrincipalsCreateResponse:
    content_type: str = field(default=None)
    graph_error: Optional[shared.GraphError] = field(default=None)
    service_principal: Optional[dict[str, dict[str, Any]]] = field(default=None)
    status_code: int = field(default=None)
    
