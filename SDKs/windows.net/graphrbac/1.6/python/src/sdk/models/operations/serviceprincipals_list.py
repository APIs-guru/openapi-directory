from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ServicePrincipalsListPathParams:
    tenant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ServicePrincipalsListQueryParams:
    dollar_filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': '$filter', 'style': 'form', 'explode': True }})
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class ServicePrincipalsListRequest:
    path_params: ServicePrincipalsListPathParams = field(default=None)
    query_params: ServicePrincipalsListQueryParams = field(default=None)
    

@dataclass
class ServicePrincipalsListResponse:
    content_type: str = field(default=None)
    graph_error: Optional[shared.GraphError] = field(default=None)
    service_principal_list_result: Optional[shared.ServicePrincipalListResult] = field(default=None)
    status_code: int = field(default=None)
    
