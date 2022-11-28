from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class EnableAristaSwitchPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnableAristaSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class EnableAristaSwitchRequest:
    path_params: EnableAristaSwitchPathParams = field()
    security: EnableAristaSwitchSecurity = field()
    

@dataclass
class EnableAristaSwitchResponse:
    content_type: str = field()
    status_code: int = field()
    
