from dataclasses import dataclass, field
from typing import Optional
DELETE_INVITE_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class DeleteInvitePathParams:
    channel_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteInviteSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteInviteRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteInvitePathParams = field(default=None)
    security: DeleteInviteSecurity = field(default=None)
    

@dataclass
class DeleteInviteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
