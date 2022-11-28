from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class CreateChangelogSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateChangelogRequest:
    request: shared.Changelog = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateChangelogSecurity = field()
    

@dataclass
class CreateChangelogResponse:
    content_type: str = field()
    status_code: int = field()
    
