from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostMyFollowsShopsSlugPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostMyFollowsShopsSlugSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyFollowsShopsSlugRequest:
    path_params: PostMyFollowsShopsSlugPathParams = field()
    security: PostMyFollowsShopsSlugSecurity = field()
    

@dataclass
class PostMyFollowsShopsSlugResponse:
    content_type: str = field()
    status_code: int = field()
    
