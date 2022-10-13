from dataclasses import dataclass, field



@dataclass
class GetChangelogPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetChangelogSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetChangelogRequest:
    path_params: GetChangelogPathParams = field(default=None)
    security: GetChangelogSecurity = field(default=None)
    

@dataclass
class GetChangelogResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
