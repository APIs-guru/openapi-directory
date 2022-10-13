from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared
CREATE_WEBHOOK_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class CreateWebhookPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateWebhookRequestBodyCreateWebhookRequest:
    event_types: List[str] = field(default=None, metadata={'form': { 'field_name': 'EventTypes' }})
    friendly_name: str = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    status: Optional[shared.WebhookEnumStatusEnum] = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    version: Optional[shared.WebhookEnumVersionEnum] = field(default=None, metadata={'form': { 'field_name': 'Version' }})
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
    verify_v2_service_webhook: Optional[shared.VerifyV2ServiceWebhook] = field(default=None)
    
