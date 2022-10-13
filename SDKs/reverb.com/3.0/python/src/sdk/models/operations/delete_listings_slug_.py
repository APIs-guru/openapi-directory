from dataclasses import dataclass, field
from typing import List


@dataclass
class DeleteListingsSlugPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteListingsSlugSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteListingsSlugRequest:
    path_params: DeleteListingsSlugPathParams = field(default=None)
    security: DeleteListingsSlugSecurity = field(default=None)
    

@dataclass
class DeleteListingsSlugResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
