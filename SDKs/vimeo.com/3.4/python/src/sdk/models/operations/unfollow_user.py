from dataclasses import dataclass, field



@dataclass
class UnfollowUserPathParams:
    follow_user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'follow_user_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnfollowUserSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UnfollowUserRequest:
    path_params: UnfollowUserPathParams = field(default=None)
    security: UnfollowUserSecurity = field(default=None)
    

@dataclass
class UnfollowUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
