from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


UPDATE_ROLE_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class UpdateRolePathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRoleUpdateRoleRequest:
    permission: List[str] = field(metadata={'form': { 'field_name': 'Permission' }})
    

@dataclass
class UpdateRoleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateRoleRequest:
    path_params: UpdateRolePathParams = field()
    security: UpdateRoleSecurity = field()
    request: Optional[UpdateRoleUpdateRoleRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateRoleResponse:
    content_type: str = field()
    status_code: int = field()
    chat_v2_service_role: Optional[shared.ChatV2ServiceRole] = field(default=None)
    
