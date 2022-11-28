from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SERVICE_WEBHOOK_CONFIGURATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class FetchServiceWebhookConfigurationPathParams:
    chat_service_sid: str = field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchServiceWebhookConfigurationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchServiceWebhookConfigurationRequest:
    path_params: FetchServiceWebhookConfigurationPathParams = field()
    security: FetchServiceWebhookConfigurationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchServiceWebhookConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    conversations_v1_service_service_configuration_service_webhook_configuration: Optional[shared.ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration] = field(default=None)
    
