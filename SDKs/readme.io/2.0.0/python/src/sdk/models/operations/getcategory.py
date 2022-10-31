from dataclasses import dataclass, field



@dataclass
class GetCategoryPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCategoryHeaders:
    x_readme_version: str = field(default=None, metadata={'header': { 'field_name': 'x-readme-version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCategorySecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetCategoryRequest:
    path_params: GetCategoryPathParams = field(default=None)
    headers: GetCategoryHeaders = field(default=None)
    security: GetCategorySecurity = field(default=None)
    

@dataclass
class GetCategoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
