from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PutUsersUserIDChangePasswordPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutUsersUserIDChangePasswordRequests:
    update_password_info: Optional[shared.UpdatePasswordInfo] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    update_password_info1: Optional[shared.UpdatePasswordInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_password_info2: Optional[shared.UpdatePasswordInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    update_password_info3: Optional[shared.UpdatePasswordInfo] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutUsersUserIDChangePasswordRequest:
    path_params: PutUsersUserIDChangePasswordPathParams = field()
    request: Optional[PutUsersUserIDChangePasswordRequests] = field(default=None)
    

@dataclass
class PutUsersUserIDChangePasswordResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    
