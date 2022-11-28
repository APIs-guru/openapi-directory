from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteDocPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDocHeaders:
    x_readme_version: str = field(metadata={'header': { 'field_name': 'x-readme-version', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDocSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteDocRequest:
    headers: DeleteDocHeaders = field()
    path_params: DeleteDocPathParams = field()
    security: DeleteDocSecurity = field()
    

@dataclass
class DeleteDocResponse:
    content_type: str = field()
    status_code: int = field()
    
