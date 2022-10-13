from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_CONFIGURATION_WEBHOOK_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class UpdateConfigurationWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateConfigurationWebhookRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateConfigurationWebhookSecurity = field(default=None)
    

@dataclass
class UpdateConfigurationWebhookResponses:
    conversations_v1_configuration_configuration_webhook: Optional[shared.ConversationsV1ConfigurationConfigurationWebhook] = field(default=None)
    

@dataclass
class UpdateConfigurationWebhookResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateConfigurationWebhookResponses]] = field(default=None)
    status_code: int = field(default=None)
    
