from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteJuniperSwitchPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteJuniperSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteJuniperSwitchRequest:
    path_params: DeleteJuniperSwitchPathParams = field()
    security: DeleteJuniperSwitchSecurity = field()
    

@dataclass
class DeleteJuniperSwitchResponse:
    content_type: str = field()
    status_code: int = field()
    
