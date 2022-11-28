from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_WEBHOOK_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class FetchWebhookPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchWebhookRequest:
    path_params: FetchWebhookPathParams = field()
    security: FetchWebhookSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    verify_v2_service_webhook: Optional[shared.VerifyV2ServiceWebhook] = field(default=None)
    
