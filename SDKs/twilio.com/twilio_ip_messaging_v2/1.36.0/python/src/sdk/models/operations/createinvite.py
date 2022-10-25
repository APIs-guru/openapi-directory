from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_INVITE_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class CreateInvitePathParams:
    channel_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateInviteCreateInviteRequest:
    identity: str = field(default=None, metadata={'form': { 'field_name': 'Identity' }})
    role_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RoleSid' }})
    

@dataclass
class CreateInviteSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateInviteRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateInvitePathParams = field(default=None)
    request: Optional[CreateInviteCreateInviteRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateInviteSecurity = field(default=None)
    

@dataclass
class CreateInviteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    ip_messaging_v2_service_channel_invite: Optional[shared.IPMessagingV2ServiceChannelInvite] = field(default=None)
    
