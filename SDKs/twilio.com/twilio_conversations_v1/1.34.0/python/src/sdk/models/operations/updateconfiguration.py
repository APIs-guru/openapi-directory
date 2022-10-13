from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_CONFIGURATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class UpdateConfigurationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateConfigurationRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateConfigurationSecurity = field(default=None)
    

@dataclass
class UpdateConfigurationResponses:
    conversations_v1_configuration: Optional[shared.ConversationsV1Configuration] = field(default=None)
    

@dataclass
class UpdateConfigurationResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateConfigurationResponses]] = field(default=None)
    status_code: int = field(default=None)
    
