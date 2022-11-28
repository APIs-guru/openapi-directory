from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUsersUserIDDutyStatusPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersUserIDDutyStatusRequest:
    path_params: GetUsersUserIDDutyStatusPathParams = field()
    

@dataclass
class GetUsersUserIDDutyStatusResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    user_duty_info: Optional[shared.UserDutyInfo] = field(default=None)
    
