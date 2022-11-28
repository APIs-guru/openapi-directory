from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteHpvcManagerPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteHpvcManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteHpvcManagerRequest:
    path_params: DeleteHpvcManagerPathParams = field()
    security: DeleteHpvcManagerSecurity = field()
    

@dataclass
class DeleteHpvcManagerResponse:
    content_type: str = field()
    status_code: int = field()
    
