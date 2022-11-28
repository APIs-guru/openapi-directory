from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_WEBHOOK_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class UpdateWebhookPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateWebhookUpdateWebhookRequest:
    events: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Events' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    webhook_method: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'WebhookMethod' }})
    webhook_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'WebhookUrl' }})
    

@dataclass
class UpdateWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateWebhookRequest:
    path_params: UpdateWebhookPathParams = field()
    security: UpdateWebhookSecurity = field()
    request: Optional[UpdateWebhookUpdateWebhookRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    autopilot_v1_assistant_webhook: Optional[shared.AutopilotV1AssistantWebhook] = field(default=None)
    
