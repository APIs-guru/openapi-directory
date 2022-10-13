from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FollowUserPathParams:
    follow_user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'follow_user_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class FollowUserSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FollowUserRequest:
    path_params: FollowUserPathParams = field(default=None)
    security: FollowUserSecurity = field(default=None)
    

@dataclass
class FollowUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
