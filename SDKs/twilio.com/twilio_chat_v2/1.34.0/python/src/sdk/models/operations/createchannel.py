from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
CREATE_CHANNEL_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class CreateChannelPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateChannelHeaders:
    x_twilio_webhook_enabled: Optional[shared.ChannelEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled' }})
    

@dataclass
class CreateChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateChannelRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateChannelPathParams = field(default=None)
    headers: CreateChannelHeaders = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateChannelSecurity = field(default=None)
    

@dataclass
class CreateChannelResponses:
    chat_v2_service_channel: Optional[shared.ChatV2ServiceChannel] = field(default=None)
    

@dataclass
class CreateChannelResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateChannelResponses]] = field(default=None)
    status_code: int = field(default=None)
    
