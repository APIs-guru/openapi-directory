from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetServicesQueryParams:
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class GetServicesSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetServicesRequest:
    query_params: GetServicesQueryParams = field()
    security: GetServicesSecurity = field()
    

@dataclass
class GetServicesResponse:
    content_type: str = field()
    status_code: int = field()
    services: Optional[List[shared.Service]] = field(default=None)
    
