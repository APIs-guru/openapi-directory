from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class UpdateDocPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDocHeaders:
    x_readme_version: str = field(default=None, metadata={'header': { 'field_name': 'x-readme-version' }})
    

@dataclass
class UpdateDocSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateDocRequest:
    path_params: UpdateDocPathParams = field(default=None)
    headers: UpdateDocHeaders = field(default=None)
    request: shared.Doc = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateDocSecurity = field(default=None)
    

@dataclass
class UpdateDocResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
