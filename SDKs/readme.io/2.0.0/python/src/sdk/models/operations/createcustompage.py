from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class CreateCustomPageSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCustomPageRequest:
    request: shared.CustomPage = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateCustomPageSecurity = field(default=None)
    

@dataclass
class CreateCustomPageResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
