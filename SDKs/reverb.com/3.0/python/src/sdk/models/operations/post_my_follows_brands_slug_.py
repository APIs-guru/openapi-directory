from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostMyFollowsBrandsSlugPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostMyFollowsBrandsSlugSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyFollowsBrandsSlugRequest:
    path_params: PostMyFollowsBrandsSlugPathParams = field()
    security: PostMyFollowsBrandsSlugSecurity = field()
    

@dataclass
class PostMyFollowsBrandsSlugResponse:
    content_type: str = field()
    status_code: int = field()
    
