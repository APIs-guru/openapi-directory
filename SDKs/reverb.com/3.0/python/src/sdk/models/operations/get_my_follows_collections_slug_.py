from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyFollowsCollectionsSlugPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMyFollowsCollectionsSlugSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyFollowsCollectionsSlugRequest:
    path_params: GetMyFollowsCollectionsSlugPathParams = field()
    security: GetMyFollowsCollectionsSlugSecurity = field()
    

@dataclass
class GetMyFollowsCollectionsSlugResponse:
    content_type: str = field()
    status_code: int = field()
    
