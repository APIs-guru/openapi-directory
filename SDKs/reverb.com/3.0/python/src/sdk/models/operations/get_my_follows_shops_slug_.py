from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyFollowsShopsSlugPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMyFollowsShopsSlugSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyFollowsShopsSlugRequest:
    path_params: GetMyFollowsShopsSlugPathParams = field()
    security: GetMyFollowsShopsSlugSecurity = field()
    

@dataclass
class GetMyFollowsShopsSlugResponse:
    content_type: str = field()
    status_code: int = field()
    
