from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteCiscoSwitchPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCiscoSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteCiscoSwitchRequest:
    path_params: DeleteCiscoSwitchPathParams = field()
    security: DeleteCiscoSwitchSecurity = field()
    

@dataclass
class DeleteCiscoSwitchResponse:
    content_type: str = field()
    status_code: int = field()
    
