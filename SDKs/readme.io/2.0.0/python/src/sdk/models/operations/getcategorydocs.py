from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetCategoryDocsPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCategoryDocsHeaders:
    x_readme_version: str = field(metadata={'header': { 'field_name': 'x-readme-version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCategoryDocsSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetCategoryDocsRequest:
    headers: GetCategoryDocsHeaders = field()
    path_params: GetCategoryDocsPathParams = field()
    security: GetCategoryDocsSecurity = field()
    

@dataclass
class GetCategoryDocsResponse:
    content_type: str = field()
    status_code: int = field()
    
