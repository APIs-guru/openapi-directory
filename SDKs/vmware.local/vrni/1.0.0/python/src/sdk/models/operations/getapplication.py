from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetApplicationPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetApplicationSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetApplicationRequest:
    path_params: GetApplicationPathParams = field()
    security: GetApplicationSecurity = field()
    

@dataclass
class GetApplicationResponse:
    content_type: str = field()
    status_code: int = field()
    application: Optional[shared.Application] = field(default=None)
    
