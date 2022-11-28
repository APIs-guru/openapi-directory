from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class EnableCiscoSwitchPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnableCiscoSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class EnableCiscoSwitchRequest:
    path_params: EnableCiscoSwitchPathParams = field()
    security: EnableCiscoSwitchSecurity = field()
    

@dataclass
class EnableCiscoSwitchResponse:
    content_type: str = field()
    status_code: int = field()
    
