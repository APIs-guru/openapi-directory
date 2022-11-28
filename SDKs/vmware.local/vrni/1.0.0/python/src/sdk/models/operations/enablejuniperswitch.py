from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class EnableJuniperSwitchPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnableJuniperSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class EnableJuniperSwitchRequest:
    path_params: EnableJuniperSwitchPathParams = field()
    security: EnableJuniperSwitchSecurity = field()
    

@dataclass
class EnableJuniperSwitchResponse:
    content_type: str = field()
    status_code: int = field()
    
