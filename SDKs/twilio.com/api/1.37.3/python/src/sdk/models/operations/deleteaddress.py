from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_ADDRESS_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteAddressPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAddressSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteAddressRequest:
    path_params: DeleteAddressPathParams = field()
    security: DeleteAddressSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteAddressResponse:
    content_type: str = field()
    status_code: int = field()
    
