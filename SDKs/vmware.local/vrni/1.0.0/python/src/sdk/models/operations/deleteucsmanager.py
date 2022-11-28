from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteUcsManagerPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUcsManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteUcsManagerRequest:
    path_params: DeleteUcsManagerPathParams = field()
    security: DeleteUcsManagerSecurity = field()
    

@dataclass
class DeleteUcsManagerResponse:
    content_type: str = field()
    status_code: int = field()
    
