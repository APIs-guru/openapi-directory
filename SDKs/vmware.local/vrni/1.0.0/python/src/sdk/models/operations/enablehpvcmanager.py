from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class EnableHpvcManagerPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnableHpvcManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class EnableHpvcManagerRequest:
    path_params: EnableHpvcManagerPathParams = field()
    security: EnableHpvcManagerSecurity = field()
    

@dataclass
class EnableHpvcManagerResponse:
    content_type: str = field()
    status_code: int = field()
    
