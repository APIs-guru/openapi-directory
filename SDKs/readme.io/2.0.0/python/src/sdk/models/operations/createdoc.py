from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class CreateDocHeaders:
    x_readme_version: str = field(metadata={'header': { 'field_name': 'x-readme-version', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDocSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateDocRequest:
    headers: CreateDocHeaders = field()
    request: shared.Doc = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateDocSecurity = field()
    

@dataclass
class CreateDocResponse:
    content_type: str = field()
    status_code: int = field()
    
