from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class CreateCustomPageSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCustomPageRequest:
    request: shared.CustomPage = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateCustomPageSecurity = field()
    

@dataclass
class CreateCustomPageResponse:
    content_type: str = field()
    status_code: int = field()
    
