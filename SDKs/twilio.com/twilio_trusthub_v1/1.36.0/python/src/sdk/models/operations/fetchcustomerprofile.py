from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_CUSTOMER_PROFILE_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class FetchCustomerProfilePathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchCustomerProfileSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchCustomerProfileRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchCustomerProfilePathParams = field(default=None)
    security: FetchCustomerProfileSecurity = field(default=None)
    

@dataclass
class FetchCustomerProfileResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    trusthub_v1_customer_profile: Optional[shared.TrusthubV1CustomerProfile] = field(default=None)
    
