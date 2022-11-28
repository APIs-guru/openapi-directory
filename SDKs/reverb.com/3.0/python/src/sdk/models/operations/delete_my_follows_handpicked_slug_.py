from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteMyFollowsHandpickedSlugPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMyFollowsHandpickedSlugSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteMyFollowsHandpickedSlugRequest:
    path_params: DeleteMyFollowsHandpickedSlugPathParams = field()
    security: DeleteMyFollowsHandpickedSlugSecurity = field()
    

@dataclass
class DeleteMyFollowsHandpickedSlugResponse:
    content_type: str = field()
    status_code: int = field()
    
