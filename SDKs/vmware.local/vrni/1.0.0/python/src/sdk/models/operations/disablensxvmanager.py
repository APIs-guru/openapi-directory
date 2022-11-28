from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DisableNsxvManagerPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisableNsxvManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DisableNsxvManagerRequest:
    path_params: DisableNsxvManagerPathParams = field()
    security: DisableNsxvManagerSecurity = field()
    

@dataclass
class DisableNsxvManagerResponse:
    content_type: str = field()
    status_code: int = field()
    
