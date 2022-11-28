from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DisableBrocadeSwitchPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisableBrocadeSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DisableBrocadeSwitchRequest:
    path_params: DisableBrocadeSwitchPathParams = field()
    security: DisableBrocadeSwitchSecurity = field()
    

@dataclass
class DisableBrocadeSwitchResponse:
    content_type: str = field()
    status_code: int = field()
    
