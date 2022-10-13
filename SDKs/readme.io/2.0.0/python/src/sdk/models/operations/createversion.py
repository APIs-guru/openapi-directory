from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class CreateVersionSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateVersionRequest:
    request: shared.Version = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateVersionSecurity = field(default=None)
    

@dataclass
class CreateVersionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
