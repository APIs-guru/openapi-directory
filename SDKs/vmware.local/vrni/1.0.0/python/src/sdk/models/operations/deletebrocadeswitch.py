from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteBrocadeSwitchPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteBrocadeSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteBrocadeSwitchRequest:
    path_params: DeleteBrocadeSwitchPathParams = field()
    security: DeleteBrocadeSwitchSecurity = field()
    

@dataclass
class DeleteBrocadeSwitchResponse:
    content_type: str = field()
    status_code: int = field()
    
