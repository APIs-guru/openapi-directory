from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_CHANNEL_WEBHOOK_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class FetchChannelWebhookPathParams:
    channel_sid: str = field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchChannelWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchChannelWebhookRequest:
    path_params: FetchChannelWebhookPathParams = field()
    security: FetchChannelWebhookSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchChannelWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    ip_messaging_v2_service_channel_channel_webhook: Optional[shared.IPMessagingV2ServiceChannelChannelWebhook] = field(default=None)
    
