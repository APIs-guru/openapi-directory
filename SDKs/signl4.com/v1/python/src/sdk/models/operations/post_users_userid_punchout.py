from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostUsersUserIDPunchOutPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostUsersUserIDPunchOutRequest:
    path_params: PostUsersUserIDPunchOutPathParams = field(default=None)
    

@dataclass
class PostUsersUserIDPunchOutResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    status_code: int = field(default=None)
    user_duty_info: Optional[shared.UserDutyInfo] = field(default=None)
    
