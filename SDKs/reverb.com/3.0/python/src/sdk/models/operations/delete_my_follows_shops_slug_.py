from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteMyFollowsShopsSlugPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMyFollowsShopsSlugSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteMyFollowsShopsSlugRequest:
    path_params: DeleteMyFollowsShopsSlugPathParams = field()
    security: DeleteMyFollowsShopsSlugSecurity = field()
    

@dataclass
class DeleteMyFollowsShopsSlugResponse:
    content_type: str = field()
    status_code: int = field()
    
