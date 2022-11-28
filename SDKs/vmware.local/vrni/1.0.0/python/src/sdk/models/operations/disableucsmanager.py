from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DisableUcsManagerPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisableUcsManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DisableUcsManagerRequest:
    path_params: DisableUcsManagerPathParams = field()
    security: DisableUcsManagerSecurity = field()
    

@dataclass
class DisableUcsManagerResponse:
    content_type: str = field()
    status_code: int = field()
    
