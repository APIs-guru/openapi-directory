from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class EnableUcsManagerPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnableUcsManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class EnableUcsManagerRequest:
    path_params: EnableUcsManagerPathParams = field()
    security: EnableUcsManagerSecurity = field()
    

@dataclass
class EnableUcsManagerResponse:
    content_type: str = field()
    status_code: int = field()
    
