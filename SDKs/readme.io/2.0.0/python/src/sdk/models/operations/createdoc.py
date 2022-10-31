from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class CreateDocHeaders:
    x_readme_version: str = field(default=None, metadata={'header': { 'field_name': 'x-readme-version', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDocSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateDocRequest:
    headers: CreateDocHeaders = field(default=None)
    request: shared.Doc = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateDocSecurity = field(default=None)
    

@dataclass
class CreateDocResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
