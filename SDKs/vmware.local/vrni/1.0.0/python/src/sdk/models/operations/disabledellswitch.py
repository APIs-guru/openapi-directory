from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DisableDellSwitchPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisableDellSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DisableDellSwitchRequest:
    path_params: DisableDellSwitchPathParams = field()
    security: DisableDellSwitchSecurity = field()
    

@dataclass
class DisableDellSwitchResponse:
    content_type: str = field()
    status_code: int = field()
    
