from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetApplicationPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetApplicationSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetApplicationRequest:
    path_params: GetApplicationPathParams = field(default=None)
    security: GetApplicationSecurity = field(default=None)
    

@dataclass
class GetApplicationResponse:
    application: Optional[shared.Application] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
