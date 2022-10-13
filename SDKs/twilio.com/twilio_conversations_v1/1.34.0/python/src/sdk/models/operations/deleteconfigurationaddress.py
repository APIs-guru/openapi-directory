from dataclasses import dataclass, field
from typing import Optional
DELETE_CONFIGURATION_ADDRESS_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class DeleteConfigurationAddressPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConfigurationAddressSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteConfigurationAddressRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteConfigurationAddressPathParams = field(default=None)
    security: DeleteConfigurationAddressSecurity = field(default=None)
    

@dataclass
class DeleteConfigurationAddressResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
