from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


UPDATE_SERVICE_WEBHOOK_CONFIGURATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class UpdateServiceWebhookConfigurationPathParams:
    chat_service_sid: str = field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateServiceWebhookConfigurationUpdateServiceWebhookConfigurationRequest:
    filters: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'Filters' }})
    method: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Method' }})
    post_webhook_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'PostWebhookUrl' }})
    pre_webhook_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'PreWebhookUrl' }})
    

@dataclass
class UpdateServiceWebhookConfigurationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateServiceWebhookConfigurationRequest:
    path_params: UpdateServiceWebhookConfigurationPathParams = field()
    security: UpdateServiceWebhookConfigurationSecurity = field()
    request: Optional[UpdateServiceWebhookConfigurationUpdateServiceWebhookConfigurationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateServiceWebhookConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    conversations_v1_service_service_configuration_service_webhook_configuration: Optional[shared.ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration] = field(default=None)
    
