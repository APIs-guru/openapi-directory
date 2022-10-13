from dataclasses import dataclass, field
from typing import List


@dataclass
class GetListingsSlugEditPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingsSlugEditSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetListingsSlugEditRequest:
    path_params: GetListingsSlugEditPathParams = field(default=None)
    security: GetListingsSlugEditSecurity = field(default=None)
    

@dataclass
class GetListingsSlugEditResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
