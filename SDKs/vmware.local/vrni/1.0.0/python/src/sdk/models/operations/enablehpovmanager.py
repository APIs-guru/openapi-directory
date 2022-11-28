from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class EnableHpovManagerPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnableHpovManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class EnableHpovManagerRequest:
    path_params: EnableHpovManagerPathParams = field()
    security: EnableHpovManagerSecurity = field()
    

@dataclass
class EnableHpovManagerResponse:
    content_type: str = field()
    status_code: int = field()
    
