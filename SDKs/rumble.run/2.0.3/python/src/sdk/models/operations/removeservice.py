from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class RemoveServicePathParams:
    service_id: str = field(metadata={'path_param': { 'field_name': 'service_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveServiceSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RemoveServiceRequest:
    path_params: RemoveServicePathParams = field()
    security: RemoveServiceSecurity = field()
    

@dataclass
class RemoveServiceResponse:
    content_type: str = field()
    status_code: int = field()
    
