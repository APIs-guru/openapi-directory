from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_WEBHOOK_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class FetchWebhookPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchWebhookRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchWebhookPathParams = field(default=None)
    security: FetchWebhookSecurity = field(default=None)
    

@dataclass
class FetchWebhookResponses:
    autopilot_v1_assistant_webhook: Optional[shared.AutopilotV1AssistantWebhook] = field(default=None)
    

@dataclass
class FetchWebhookResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchWebhookResponses]] = field(default=None)
    status_code: int = field(default=None)
    
