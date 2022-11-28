from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetDocPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDocHeaders:
    x_readme_version: str = field(metadata={'header': { 'field_name': 'x-readme-version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDocSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetDocRequest:
    headers: GetDocHeaders = field()
    path_params: GetDocPathParams = field()
    security: GetDocSecurity = field()
    

@dataclass
class GetDocResponse:
    content_type: str = field()
    status_code: int = field()
    
