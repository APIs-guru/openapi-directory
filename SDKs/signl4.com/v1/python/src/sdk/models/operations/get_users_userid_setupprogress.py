from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUsersUserIDSetupProgressPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersUserIDSetupProgressRequest:
    path_params: GetUsersUserIDSetupProgressPathParams = field()
    

@dataclass
class GetUsersUserIDSetupProgressResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    user_setup_progress: Optional[shared.UserSetupProgress] = field(default=None)
    
