from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DisableJuniperSwitchPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisableJuniperSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DisableJuniperSwitchRequest:
    path_params: DisableJuniperSwitchPathParams = field()
    security: DisableJuniperSwitchSecurity = field()
    

@dataclass
class DisableJuniperSwitchResponse:
    content_type: str = field()
    status_code: int = field()
    
