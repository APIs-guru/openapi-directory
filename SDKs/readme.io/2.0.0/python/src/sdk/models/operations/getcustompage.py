from dataclasses import dataclass, field



@dataclass
class GetCustomPagePathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCustomPageSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetCustomPageRequest:
    path_params: GetCustomPagePathParams = field(default=None)
    security: GetCustomPageSecurity = field(default=None)
    

@dataclass
class GetCustomPageResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
