from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class EnableDellSwitchPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnableDellSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class EnableDellSwitchRequest:
    path_params: EnableDellSwitchPathParams = field()
    security: EnableDellSwitchSecurity = field()
    

@dataclass
class EnableDellSwitchResponse:
    content_type: str = field()
    status_code: int = field()
    
