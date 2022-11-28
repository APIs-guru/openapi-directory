from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_MEMBER_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class CreateMemberPathParams:
    channel_sid: str = field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateMemberCreateMemberRequest:
    identity: str = field(metadata={'form': { 'field_name': 'Identity' }})
    role_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RoleSid' }})
    

@dataclass
class CreateMemberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateMemberRequest:
    path_params: CreateMemberPathParams = field()
    security: CreateMemberSecurity = field()
    request: Optional[CreateMemberCreateMemberRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateMemberResponse:
    content_type: str = field()
    status_code: int = field()
    ip_messaging_v1_service_channel_member: Optional[shared.IPMessagingV1ServiceChannelMember] = field(default=None)
    
