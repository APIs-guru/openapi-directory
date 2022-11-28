from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutUsersUserIDProfilePathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutUsersUserIDProfileRequests:
    user_profile: Optional[shared.UserProfile] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    user_profile1: Optional[shared.UserProfile] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    user_profile2: Optional[shared.UserProfile] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    user_profile3: Optional[shared.UserProfile] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutUsersUserIDProfileRequest:
    path_params: PutUsersUserIDProfilePathParams = field()
    request: Optional[PutUsersUserIDProfileRequests] = field(default=None)
    

@dataclass
class PutUsersUserIDProfileResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    user_info: Optional[shared.UserInfo] = field(default=None)
    
