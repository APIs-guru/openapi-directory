from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_CHANNEL_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class UpdateChannelPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateChannelRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateChannelPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateChannelSecurity = field(default=None)
    

@dataclass
class UpdateChannelResponses:
    chat_v1_service_channel: Optional[shared.ChatV1ServiceChannel] = field(default=None)
    

@dataclass
class UpdateChannelResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateChannelResponses]] = field(default=None)
    status_code: int = field(default=None)
    
