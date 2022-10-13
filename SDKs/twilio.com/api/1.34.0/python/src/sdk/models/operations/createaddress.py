from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_ADDRESS_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateAddressPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAddressSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateAddressRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateAddressPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateAddressSecurity = field(default=None)
    

@dataclass
class CreateAddressResponses:
    api_v2010_account_address: Optional[shared.APIV2010AccountAddress] = field(default=None)
    

@dataclass
class CreateAddressResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateAddressResponses]] = field(default=None)
    status_code: int = field(default=None)
    
