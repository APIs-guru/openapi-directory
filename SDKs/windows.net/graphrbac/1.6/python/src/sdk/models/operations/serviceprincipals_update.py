from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ServicePrincipalsUpdatePathParams:
    object_id: str = field(metadata={'path_param': { 'field_name': 'objectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ServicePrincipalsUpdateQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class ServicePrincipalsUpdateRequests:
    service_principal_update_parameters: Optional[shared.ServicePrincipalUpdateParameters] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    service_principal_update_parameters1: Optional[shared.ServicePrincipalUpdateParameters] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ServicePrincipalsUpdateRequest:
    path_params: ServicePrincipalsUpdatePathParams = field()
    query_params: ServicePrincipalsUpdateQueryParams = field()
    request: ServicePrincipalsUpdateRequests = field()
    

@dataclass
class ServicePrincipalsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    graph_error: Optional[shared.GraphError] = field(default=None)
    
