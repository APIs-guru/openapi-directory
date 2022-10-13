from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class CreateChangelogSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateChangelogRequest:
    request: shared.Changelog = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateChangelogSecurity = field(default=None)
    

@dataclass
class CreateChangelogResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
