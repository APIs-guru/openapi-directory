from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutUsersUserIDProfilePathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutUsersUserIDProfileRequests:
    user_profile: Optional[shared.UserProfile] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    user_profile1: Optional[shared.UserProfile] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    user_profile2: Optional[shared.UserProfile] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    user_profile3: Optional[shared.UserProfile] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutUsersUserIDProfileRequest:
    path_params: PutUsersUserIDProfilePathParams = field(default=None)
    request: Optional[PutUsersUserIDProfileRequests] = field(default=None)
    

@dataclass
class PutUsersUserIDProfileResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    status_code: int = field(default=None)
    user_info: Optional[shared.UserInfo] = field(default=None)
    
