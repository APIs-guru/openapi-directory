from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetServicePathParams:
    service_id: str = field(metadata={'path_param': { 'field_name': 'service_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetServiceSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetServiceRequest:
    path_params: GetServicePathParams = field()
    security: GetServiceSecurity = field()
    

@dataclass
class GetServiceResponse:
    content_type: str = field()
    status_code: int = field()
    service: Optional[shared.Service] = field(default=None)
    
