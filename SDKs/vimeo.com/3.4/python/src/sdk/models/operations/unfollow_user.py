from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class UnfollowUserPathParams:
    follow_user_id: float = field(metadata={'path_param': { 'field_name': 'follow_user_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnfollowUserSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UnfollowUserRequest:
    path_params: UnfollowUserPathParams = field()
    security: UnfollowUserSecurity = field()
    

@dataclass
class UnfollowUserResponse:
    content_type: str = field()
    status_code: int = field()
    
