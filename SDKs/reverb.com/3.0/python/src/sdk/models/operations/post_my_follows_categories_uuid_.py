from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostMyFollowsCategoriesUUIDPathParams:
    uuid: str = field(metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostMyFollowsCategoriesUUIDSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyFollowsCategoriesUUIDRequest:
    path_params: PostMyFollowsCategoriesUUIDPathParams = field()
    security: PostMyFollowsCategoriesUUIDSecurity = field()
    

@dataclass
class PostMyFollowsCategoriesUUIDResponse:
    content_type: str = field()
    status_code: int = field()
    
