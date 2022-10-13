from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetServicesQueryParams:
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class GetServicesSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetServicesRequest:
    query_params: GetServicesQueryParams = field(default=None)
    security: GetServicesSecurity = field(default=None)
    

@dataclass
class GetServicesResponse:
    content_type: str = field(default=None)
    services: Optional[List[shared.Service]] = field(default=None)
    status_code: int = field(default=None)
    
