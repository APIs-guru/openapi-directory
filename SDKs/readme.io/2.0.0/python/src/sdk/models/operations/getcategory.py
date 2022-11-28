from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetCategoryPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCategoryHeaders:
    x_readme_version: str = field(metadata={'header': { 'field_name': 'x-readme-version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCategorySecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetCategoryRequest:
    headers: GetCategoryHeaders = field()
    path_params: GetCategoryPathParams = field()
    security: GetCategorySecurity = field()
    

@dataclass
class GetCategoryResponse:
    content_type: str = field()
    status_code: int = field()
    
