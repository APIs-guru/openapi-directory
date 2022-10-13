from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_MEMBER_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class CreateMemberPathParams:
    channel_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateMemberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateMemberRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateMemberPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateMemberSecurity = field(default=None)
    

@dataclass
class CreateMemberResponses:
    chat_v1_service_channel_member: Optional[shared.ChatV1ServiceChannelMember] = field(default=None)
    

@dataclass
class CreateMemberResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateMemberResponses]] = field(default=None)
    status_code: int = field(default=None)
    
