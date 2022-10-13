from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_CONFIGURATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class FetchConfigurationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchConfigurationRequest:
    server_url: Optional[str] = field(default=None)
    security: FetchConfigurationSecurity = field(default=None)
    

@dataclass
class FetchConfigurationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    conversations_v1_configuration: Optional[shared.ConversationsV1Configuration] = field(default=None)
    
