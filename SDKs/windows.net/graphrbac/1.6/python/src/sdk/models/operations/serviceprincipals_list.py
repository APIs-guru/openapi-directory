from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ServicePrincipalsListPathParams:
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ServicePrincipalsListQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    dollar_filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': '$filter', 'style': 'form', 'explode': True }})
    

@dataclass
class ServicePrincipalsListRequest:
    path_params: ServicePrincipalsListPathParams = field()
    query_params: ServicePrincipalsListQueryParams = field()
    

@dataclass
class ServicePrincipalsListResponse:
    content_type: str = field()
    status_code: int = field()
    graph_error: Optional[shared.GraphError] = field(default=None)
    service_principal_list_result: Optional[shared.ServicePrincipalListResult] = field(default=None)
    
