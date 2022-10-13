from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_ADDRESS_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchAddressPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchAddressSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchAddressRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchAddressPathParams = field(default=None)
    security: FetchAddressSecurity = field(default=None)
    

@dataclass
class FetchAddressResponses:
    api_v2010_account_address: Optional[shared.APIV2010AccountAddress] = field(default=None)
    

@dataclass
class FetchAddressResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchAddressResponses]] = field(default=None)
    status_code: int = field(default=None)
    
