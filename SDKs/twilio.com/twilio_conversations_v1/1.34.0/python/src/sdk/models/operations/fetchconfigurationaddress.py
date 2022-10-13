from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_CONFIGURATION_ADDRESS_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class FetchConfigurationAddressPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchConfigurationAddressSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchConfigurationAddressRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchConfigurationAddressPathParams = field(default=None)
    security: FetchConfigurationAddressSecurity = field(default=None)
    

@dataclass
class FetchConfigurationAddressResponses:
    conversations_v1_configuration_address: Optional[shared.ConversationsV1ConfigurationAddress] = field(default=None)
    

@dataclass
class FetchConfigurationAddressResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchConfigurationAddressResponses]] = field(default=None)
    status_code: int = field(default=None)
    
