from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_WEBHOOK_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class UpdateWebhookPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateWebhookUpdateWebhookRequest:
    events: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Events' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    webhook_method: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'WebhookMethod' }})
    webhook_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'WebhookUrl' }})
    

@dataclass
class UpdateWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateWebhookRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateWebhookPathParams = field(default=None)
    request: Optional[UpdateWebhookUpdateWebhookRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateWebhookSecurity = field(default=None)
    

@dataclass
class UpdateWebhookResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    autopilot_v1_assistant_webhook: Optional[shared.AutopilotV1AssistantWebhook] = field(default=None)
    
