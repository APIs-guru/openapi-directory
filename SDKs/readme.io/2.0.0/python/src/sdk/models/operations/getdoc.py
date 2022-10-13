from dataclasses import dataclass, field



@dataclass
class GetDocPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDocHeaders:
    x_readme_version: str = field(default=None, metadata={'header': { 'field_name': 'x-readme-version' }})
    

@dataclass
class GetDocSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetDocRequest:
    path_params: GetDocPathParams = field(default=None)
    headers: GetDocHeaders = field(default=None)
    security: GetDocSecurity = field(default=None)
    

@dataclass
class GetDocResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
