from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_CONFIGURATION_WEBHOOK_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class FetchConfigurationWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchConfigurationWebhookRequest:
    security: FetchConfigurationWebhookSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchConfigurationWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    conversations_v1_configuration_configuration_webhook: Optional[shared.ConversationsV1ConfigurationConfigurationWebhook] = field(default=None)
    
