from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteHpovManagerPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteHpovManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteHpovManagerRequest:
    path_params: DeleteHpovManagerPathParams = field()
    security: DeleteHpovManagerSecurity = field()
    

@dataclass
class DeleteHpovManagerResponse:
    content_type: str = field()
    status_code: int = field()
    
