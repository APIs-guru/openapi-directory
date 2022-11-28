from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetCustomPagePathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCustomPageSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetCustomPageRequest:
    path_params: GetCustomPagePathParams = field()
    security: GetCustomPageSecurity = field()
    

@dataclass
class GetCustomPageResponse:
    content_type: str = field()
    status_code: int = field()
    
