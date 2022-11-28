from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


CREATE_WEBHOOK_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class CreateWebhookPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateWebhookCreateWebhookRequest:
    event_types: List[str] = field(metadata={'form': { 'field_name': 'EventTypes' }})
    friendly_name: str = field(metadata={'form': { 'field_name': 'FriendlyName' }})
    webhook_url: str = field(metadata={'form': { 'field_name': 'WebhookUrl' }})
    status: Optional[shared.WebhookEnumStatusEnum] = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    version: Optional[shared.WebhookEnumVersionEnum] = field(default=None, metadata={'form': { 'field_name': 'Version' }})
    

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
    verify_v2_service_webhook: Optional[shared.VerifyV2ServiceWebhook] = field(default=None)
    
