from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_INVITE_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class FetchInvitePathParams:
    channel_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchInviteSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchInviteRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchInvitePathParams = field(default=None)
    security: FetchInviteSecurity = field(default=None)
    

@dataclass
class FetchInviteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    ip_messaging_v1_service_channel_invite: Optional[shared.IPMessagingV1ServiceChannelInvite] = field(default=None)
    
