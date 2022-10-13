from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_CHANNEL_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class UpdateChannelPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateChannelHeaders:
    x_twilio_webhook_enabled: Optional[shared.ChannelEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled' }})
    

@dataclass
class UpdateChannelRequestBodyUpdateChannelRequest:
    messaging_service_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'MessagingServiceSid' }})
    type: Optional[shared.ChannelEnumChannelTypeEnum] = field(default=None, metadata={'form': { 'field_name': 'Type' }})
    

@dataclass
class UpdateChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateChannelRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateChannelPathParams = field(default=None)
    headers: UpdateChannelHeaders = field(default=None)
    request: Optional[UpdateChannelRequestBodyUpdateChannelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateChannelSecurity = field(default=None)
    

@dataclass
class UpdateChannelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    chat_v3_channel: Optional[shared.ChatV3Channel] = field(default=None)
    
