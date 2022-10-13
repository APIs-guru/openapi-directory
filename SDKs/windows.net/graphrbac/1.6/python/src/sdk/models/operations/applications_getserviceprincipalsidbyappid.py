from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ApplicationsGetServicePrincipalsIDByAppIDPathParams:
    application_id: str = field(default=None, metadata={'path_param': { 'field_name': 'applicationID', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ApplicationsGetServicePrincipalsIDByAppIDQueryParams:
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class ApplicationsGetServicePrincipalsIDByAppIDRequest:
    path_params: ApplicationsGetServicePrincipalsIDByAppIDPathParams = field(default=None)
    query_params: ApplicationsGetServicePrincipalsIDByAppIDQueryParams = field(default=None)
    

@dataclass
class ApplicationsGetServicePrincipalsIDByAppIDResponse:
    content_type: str = field(default=None)
    graph_error: Optional[shared.GraphError] = field(default=None)
    service_principal_object_result: Optional[shared.ServicePrincipalObjectResult] = field(default=None)
    status_code: int = field(default=None)
    
