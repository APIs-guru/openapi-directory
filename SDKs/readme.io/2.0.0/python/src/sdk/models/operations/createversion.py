from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class CreateVersionSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateVersionRequest:
    request: shared.Version = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateVersionSecurity = field()
    

@dataclass
class CreateVersionResponse:
    content_type: str = field()
    status_code: int = field()
    
