from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteMyFollowsCollectionsSlugPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMyFollowsCollectionsSlugSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteMyFollowsCollectionsSlugRequest:
    path_params: DeleteMyFollowsCollectionsSlugPathParams = field()
    security: DeleteMyFollowsCollectionsSlugSecurity = field()
    

@dataclass
class DeleteMyFollowsCollectionsSlugResponse:
    content_type: str = field()
    status_code: int = field()
    
