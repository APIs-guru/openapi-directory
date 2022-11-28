from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DisableCiscoSwitchPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisableCiscoSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DisableCiscoSwitchRequest:
    path_params: DisableCiscoSwitchPathParams = field()
    security: DisableCiscoSwitchSecurity = field()
    

@dataclass
class DisableCiscoSwitchResponse:
    content_type: str = field()
    status_code: int = field()
    
