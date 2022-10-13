from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_WEBHOOK_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class CreateWebhookPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateWebhookRequestBodyCreateWebhookRequest:
    events: str = field(default=None, metadata={'form': { 'field_name': 'Events' }})
    unique_name: str = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    webhook_method: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'WebhookMethod' }})
    webhook_url: str = field(default=None, metadata={'form': { 'field_name': 'WebhookUrl' }})
    

@dataclass
class CreateWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateWebhookRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateWebhookPathParams = field(default=None)
    request: Optional[CreateWebhookRequestBodyCreateWebhookRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateWebhookSecurity = field(default=None)
    

@dataclass
class CreateWebhookResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    autopilot_v1_assistant_webhook: Optional[shared.AutopilotV1AssistantWebhook] = field(default=None)
    
