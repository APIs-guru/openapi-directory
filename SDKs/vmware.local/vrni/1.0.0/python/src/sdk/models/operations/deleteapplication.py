from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteApplicationPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteApplicationSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteApplicationRequest:
    path_params: DeleteApplicationPathParams = field()
    security: DeleteApplicationSecurity = field()
    

@dataclass
class DeleteApplicationResponse:
    content_type: str = field()
    status_code: int = field()
    
