from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyFollowsBrandsSlugPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMyFollowsBrandsSlugSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyFollowsBrandsSlugRequest:
    path_params: GetMyFollowsBrandsSlugPathParams = field()
    security: GetMyFollowsBrandsSlugSecurity = field()
    

@dataclass
class GetMyFollowsBrandsSlugResponse:
    content_type: str = field()
    status_code: int = field()
    
