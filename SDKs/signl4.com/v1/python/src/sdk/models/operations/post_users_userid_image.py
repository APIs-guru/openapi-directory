from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostUsersUserIDImagePathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostUsersUserIDImageRequest:
    path_params: PostUsersUserIDImagePathParams = field(default=None)
    

@dataclass
class PostUsersUserIDImageResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    status_code: int = field(default=None)
    
