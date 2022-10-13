from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class UpdateCustomPagePathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCustomPageSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateCustomPageRequest:
    path_params: UpdateCustomPagePathParams = field(default=None)
    request: shared.CustomPage = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateCustomPageSecurity = field(default=None)
    

@dataclass
class UpdateCustomPageResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
