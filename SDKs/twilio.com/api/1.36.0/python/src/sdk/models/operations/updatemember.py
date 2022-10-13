from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_MEMBER_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateMemberPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    queue_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'QueueSid', 'style': 'simple', 'explode': False }})
    
class UpdateMemberRequestBodyMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class UpdateMemberRequestBodyUpdateMemberRequest:
    method: Optional[UpdateMemberRequestBodyMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Method' }})
    url: str = field(default=None, metadata={'form': { 'field_name': 'Url' }})
    

@dataclass
class UpdateMemberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateMemberRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateMemberPathParams = field(default=None)
    request: Optional[UpdateMemberRequestBodyUpdateMemberRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateMemberSecurity = field(default=None)
    

@dataclass
class UpdateMemberResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_queue_member: Optional[shared.APIV2010AccountQueueMember] = field(default=None)
    
