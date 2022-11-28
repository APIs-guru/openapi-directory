from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DisableVcenterPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisableVcenterSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DisableVcenterRequest:
    path_params: DisableVcenterPathParams = field()
    security: DisableVcenterSecurity = field()
    

@dataclass
class DisableVcenterResponse:
    content_type: str = field()
    status_code: int = field()
    
