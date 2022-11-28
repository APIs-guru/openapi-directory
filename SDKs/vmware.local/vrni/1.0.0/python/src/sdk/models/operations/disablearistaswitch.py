from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DisableAristaSwitchPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisableAristaSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DisableAristaSwitchRequest:
    path_params: DisableAristaSwitchPathParams = field()
    security: DisableAristaSwitchSecurity = field()
    

@dataclass
class DisableAristaSwitchResponse:
    content_type: str = field()
    status_code: int = field()
    
