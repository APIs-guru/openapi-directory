from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


UPDATE_WEBHOOK_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class UpdateWebhookPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateWebhookUpdateWebhookRequest:
    event_types: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'EventTypes' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    status: Optional[shared.WebhookEnumStatusEnum] = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    version: Optional[shared.WebhookEnumVersionEnum] = field(default=None, metadata={'form': { 'field_name': 'Version' }})
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
    verify_v2_service_webhook: Optional[shared.VerifyV2ServiceWebhook] = field(default=None)
    
