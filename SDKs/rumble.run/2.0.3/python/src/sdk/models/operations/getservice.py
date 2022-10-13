from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetServicePathParams:
    service_id: str = field(default=None, metadata={'path_param': { 'field_name': 'service_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetServiceSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetServiceRequest:
    path_params: GetServicePathParams = field(default=None)
    security: GetServiceSecurity = field(default=None)
    

@dataclass
class GetServiceResponse:
    content_type: str = field(default=None)
    service: Optional[shared.Service] = field(default=None)
    status_code: int = field(default=None)
    
