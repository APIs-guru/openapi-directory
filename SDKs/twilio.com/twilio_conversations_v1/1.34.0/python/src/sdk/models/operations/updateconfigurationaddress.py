from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_CONFIGURATION_ADDRESS_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class UpdateConfigurationAddressPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateConfigurationAddressSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateConfigurationAddressRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateConfigurationAddressPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateConfigurationAddressSecurity = field(default=None)
    

@dataclass
class UpdateConfigurationAddressResponses:
    conversations_v1_configuration_address: Optional[shared.ConversationsV1ConfigurationAddress] = field(default=None)
    

@dataclass
class UpdateConfigurationAddressResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateConfigurationAddressResponses]] = field(default=None)
    status_code: int = field(default=None)
    
