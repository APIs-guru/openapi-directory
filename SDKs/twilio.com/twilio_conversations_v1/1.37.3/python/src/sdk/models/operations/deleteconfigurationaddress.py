from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_CONFIGURATION_ADDRESS_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class DeleteConfigurationAddressPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConfigurationAddressSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteConfigurationAddressRequest:
    path_params: DeleteConfigurationAddressPathParams = field()
    security: DeleteConfigurationAddressSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteConfigurationAddressResponse:
    content_type: str = field()
    status_code: int = field()
    
