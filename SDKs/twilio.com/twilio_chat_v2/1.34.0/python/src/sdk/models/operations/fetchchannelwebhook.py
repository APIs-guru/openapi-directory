from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_CHANNEL_WEBHOOK_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class FetchChannelWebhookPathParams:
    channel_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchChannelWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchChannelWebhookRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchChannelWebhookPathParams = field(default=None)
    security: FetchChannelWebhookSecurity = field(default=None)
    

@dataclass
class FetchChannelWebhookResponses:
    chat_v2_service_channel_channel_webhook: Optional[shared.ChatV2ServiceChannelChannelWebhook] = field(default=None)
    

@dataclass
class FetchChannelWebhookResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchChannelWebhookResponses]] = field(default=None)
    status_code: int = field(default=None)
    
