from dataclasses import dataclass, field
from typing import Optional
DELETE_WEBHOOK_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class DeleteWebhookPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteWebhookRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteWebhookPathParams = field(default=None)
    security: DeleteWebhookSecurity = field(default=None)
    

@dataclass
class DeleteWebhookResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
