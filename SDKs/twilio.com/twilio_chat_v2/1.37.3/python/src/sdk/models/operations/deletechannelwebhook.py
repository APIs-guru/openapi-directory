from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_CHANNEL_WEBHOOK_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class DeleteChannelWebhookPathParams:
    channel_sid: str = field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteChannelWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteChannelWebhookRequest:
    path_params: DeleteChannelWebhookPathParams = field()
    security: DeleteChannelWebhookSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteChannelWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    
