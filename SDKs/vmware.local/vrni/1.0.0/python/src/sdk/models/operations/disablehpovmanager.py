from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DisableHpovManagerPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisableHpovManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DisableHpovManagerRequest:
    path_params: DisableHpovManagerPathParams = field()
    security: DisableHpovManagerSecurity = field()
    

@dataclass
class DisableHpovManagerResponse:
    content_type: str = field()
    status_code: int = field()
    
