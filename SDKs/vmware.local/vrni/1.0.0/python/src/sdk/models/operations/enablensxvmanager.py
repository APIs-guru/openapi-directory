from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class EnableNsxvManagerPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnableNsxvManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class EnableNsxvManagerRequest:
    path_params: EnableNsxvManagerPathParams = field()
    security: EnableNsxvManagerSecurity = field()
    

@dataclass
class EnableNsxvManagerResponse:
    content_type: str = field()
    status_code: int = field()
    
