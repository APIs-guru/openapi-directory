from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteAristaSwitchPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAristaSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteAristaSwitchRequest:
    path_params: DeleteAristaSwitchPathParams = field()
    security: DeleteAristaSwitchSecurity = field()
    

@dataclass
class DeleteAristaSwitchResponse:
    content_type: str = field()
    status_code: int = field()
    
