from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_CHANNEL_WEBHOOK_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class CreateChannelWebhookPathParams:
    channel_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateChannelWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateChannelWebhookRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateChannelWebhookPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateChannelWebhookSecurity = field(default=None)
    

@dataclass
class CreateChannelWebhookResponses:
    ip_messaging_v2_service_channel_channel_webhook: Optional[shared.IPMessagingV2ServiceChannelChannelWebhook] = field(default=None)
    

@dataclass
class CreateChannelWebhookResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateChannelWebhookResponses]] = field(default=None)
    status_code: int = field(default=None)
    
