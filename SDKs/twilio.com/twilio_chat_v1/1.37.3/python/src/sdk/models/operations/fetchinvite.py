from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_INVITE_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class FetchInvitePathParams:
    channel_sid: str = field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchInviteSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchInviteRequest:
    path_params: FetchInvitePathParams = field()
    security: FetchInviteSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchInviteResponse:
    content_type: str = field()
    status_code: int = field()
    chat_v1_service_channel_invite: Optional[shared.ChatV1ServiceChannelInvite] = field(default=None)
    
