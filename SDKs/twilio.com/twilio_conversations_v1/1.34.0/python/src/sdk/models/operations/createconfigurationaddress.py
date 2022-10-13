from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_CONFIGURATION_ADDRESS_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class CreateConfigurationAddressSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateConfigurationAddressRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateConfigurationAddressSecurity = field(default=None)
    

@dataclass
class CreateConfigurationAddressResponses:
    conversations_v1_configuration_address: Optional[shared.ConversationsV1ConfigurationAddress] = field(default=None)
    

@dataclass
class CreateConfigurationAddressResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateConfigurationAddressResponses]] = field(default=None)
    status_code: int = field(default=None)
    
