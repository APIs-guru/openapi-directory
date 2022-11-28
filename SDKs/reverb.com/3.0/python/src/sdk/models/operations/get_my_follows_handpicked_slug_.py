from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyFollowsHandpickedSlugPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMyFollowsHandpickedSlugSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyFollowsHandpickedSlugRequest:
    path_params: GetMyFollowsHandpickedSlugPathParams = field()
    security: GetMyFollowsHandpickedSlugSecurity = field()
    

@dataclass
class GetMyFollowsHandpickedSlugResponse:
    content_type: str = field()
    status_code: int = field()
    
