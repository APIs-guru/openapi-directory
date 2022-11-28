from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DisableHpvcManagerPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisableHpvcManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DisableHpvcManagerRequest:
    path_params: DisableHpvcManagerPathParams = field()
    security: DisableHpvcManagerSecurity = field()
    

@dataclass
class DisableHpvcManagerResponse:
    content_type: str = field()
    status_code: int = field()
    
