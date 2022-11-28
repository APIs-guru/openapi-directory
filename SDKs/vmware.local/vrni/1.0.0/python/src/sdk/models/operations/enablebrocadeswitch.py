from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class EnableBrocadeSwitchPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnableBrocadeSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class EnableBrocadeSwitchRequest:
    path_params: EnableBrocadeSwitchPathParams = field()
    security: EnableBrocadeSwitchSecurity = field()
    

@dataclass
class EnableBrocadeSwitchResponse:
    content_type: str = field()
    status_code: int = field()
    
