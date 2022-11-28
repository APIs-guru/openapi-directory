from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostMyFollowsHandpickedSlugPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostMyFollowsHandpickedSlugSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyFollowsHandpickedSlugRequest:
    path_params: PostMyFollowsHandpickedSlugPathParams = field()
    security: PostMyFollowsHandpickedSlugSecurity = field()
    

@dataclass
class PostMyFollowsHandpickedSlugResponse:
    content_type: str = field()
    status_code: int = field()
    
