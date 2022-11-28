from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteMyFollowsBrandsSlugPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMyFollowsBrandsSlugSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteMyFollowsBrandsSlugRequest:
    path_params: DeleteMyFollowsBrandsSlugPathParams = field()
    security: DeleteMyFollowsBrandsSlugSecurity = field()
    

@dataclass
class DeleteMyFollowsBrandsSlugResponse:
    content_type: str = field()
    status_code: int = field()
    
