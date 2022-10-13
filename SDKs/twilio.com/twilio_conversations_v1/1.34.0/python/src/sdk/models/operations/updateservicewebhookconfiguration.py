from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_SERVICE_WEBHOOK_CONFIGURATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class UpdateServiceWebhookConfigurationPathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateServiceWebhookConfigurationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateServiceWebhookConfigurationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateServiceWebhookConfigurationPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateServiceWebhookConfigurationSecurity = field(default=None)
    

@dataclass
class UpdateServiceWebhookConfigurationResponses:
    conversations_v1_service_service_configuration_service_webhook_configuration: Optional[shared.ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration] = field(default=None)
    

@dataclass
class UpdateServiceWebhookConfigurationResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateServiceWebhookConfigurationResponses]] = field(default=None)
    status_code: int = field(default=None)
    
