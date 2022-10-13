from dataclasses import dataclass, field



@dataclass
class DeleteCustomPagePathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCustomPageSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteCustomPageRequest:
    path_params: DeleteCustomPagePathParams = field(default=None)
    security: DeleteCustomPageSecurity = field(default=None)
    

@dataclass
class DeleteCustomPageResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
