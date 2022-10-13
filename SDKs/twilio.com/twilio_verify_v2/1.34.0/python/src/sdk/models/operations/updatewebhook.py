from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_WEBHOOK_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class UpdateWebhookPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateWebhookRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateWebhookPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateWebhookSecurity = field(default=None)
    

@dataclass
class UpdateWebhookResponses:
    verify_v2_service_webhook: Optional[shared.VerifyV2ServiceWebhook] = field(default=None)
    

@dataclass
class UpdateWebhookResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateWebhookResponses]] = field(default=None)
    status_code: int = field(default=None)
    
