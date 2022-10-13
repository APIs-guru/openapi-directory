from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutUsersUserIDChangePasswordPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutUsersUserIDChangePasswordRequests:
    update_password_info: Optional[shared.UpdatePasswordInfo] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    update_password_info1: Optional[shared.UpdatePasswordInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_password_info2: Optional[shared.UpdatePasswordInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    update_password_info3: Optional[shared.UpdatePasswordInfo] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutUsersUserIDChangePasswordRequest:
    path_params: PutUsersUserIDChangePasswordPathParams = field(default=None)
    request: Optional[PutUsersUserIDChangePasswordRequests] = field(default=None)
    

@dataclass
class PutUsersUserIDChangePasswordResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    status_code: int = field(default=None)
    
