from dataclasses import dataclass, field



@dataclass
class GetCategoryDocsPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCategoryDocsHeaders:
    x_readme_version: str = field(default=None, metadata={'header': { 'field_name': 'x-readme-version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCategoryDocsSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetCategoryDocsRequest:
    path_params: GetCategoryDocsPathParams = field(default=None)
    headers: GetCategoryDocsHeaders = field(default=None)
    security: GetCategoryDocsSecurity = field(default=None)
    

@dataclass
class GetCategoryDocsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
