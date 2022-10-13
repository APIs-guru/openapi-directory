from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_CONFIGURATION_WEBHOOK_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class FetchConfigurationWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchConfigurationWebhookRequest:
    server_url: Optional[str] = field(default=None)
    security: FetchConfigurationWebhookSecurity = field(default=None)
    

@dataclass
class FetchConfigurationWebhookResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    conversations_v1_configuration_configuration_webhook: Optional[shared.ConversationsV1ConfigurationConfigurationWebhook] = field(default=None)
    
