from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_WEBHOOK_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class DeleteWebhookPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteWebhookRequest:
    path_params: DeleteWebhookPathParams = field()
    security: DeleteWebhookSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    
