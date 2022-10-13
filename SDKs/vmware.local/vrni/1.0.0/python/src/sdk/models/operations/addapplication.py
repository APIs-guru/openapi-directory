from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddApplicationSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AddApplicationRequest:
    request: shared.ApplicationRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AddApplicationSecurity = field(default=None)
    

@dataclass
class AddApplicationResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    application: Optional[shared.Application] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
