from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_WEBHOOK_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class CreateWebhookPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateWebhookCreateWebhookRequest:
    events: str = field(metadata={'form': { 'field_name': 'Events' }})
    unique_name: str = field(metadata={'form': { 'field_name': 'UniqueName' }})
    webhook_url: str = field(metadata={'form': { 'field_name': 'WebhookUrl' }})
    webhook_method: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'WebhookMethod' }})
    

@dataclass
class CreateWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateWebhookRequest:
    path_params: CreateWebhookPathParams = field()
    security: CreateWebhookSecurity = field()
    request: Optional[CreateWebhookCreateWebhookRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    autopilot_v1_assistant_webhook: Optional[shared.AutopilotV1AssistantWebhook] = field(default=None)
    
