from dataclasses import dataclass, field



@dataclass
class DeleteDocPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDocHeaders:
    x_readme_version: str = field(default=None, metadata={'header': { 'field_name': 'x-readme-version', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDocSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteDocRequest:
    path_params: DeleteDocPathParams = field(default=None)
    headers: DeleteDocHeaders = field(default=None)
    security: DeleteDocSecurity = field(default=None)
    

@dataclass
class DeleteDocResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
