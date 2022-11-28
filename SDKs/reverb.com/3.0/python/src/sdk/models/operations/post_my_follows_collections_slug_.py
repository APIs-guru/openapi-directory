from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostMyFollowsCollectionsSlugPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostMyFollowsCollectionsSlugSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyFollowsCollectionsSlugRequest:
    path_params: PostMyFollowsCollectionsSlugPathParams = field()
    security: PostMyFollowsCollectionsSlugSecurity = field()
    

@dataclass
class PostMyFollowsCollectionsSlugResponse:
    content_type: str = field()
    status_code: int = field()
    
