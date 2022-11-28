from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_CUSTOMER_PROFILE_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class FetchCustomerProfilePathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchCustomerProfileSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchCustomerProfileRequest:
    path_params: FetchCustomerProfilePathParams = field()
    security: FetchCustomerProfileSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchCustomerProfileResponse:
    content_type: str = field()
    status_code: int = field()
    trusthub_v1_customer_profile: Optional[shared.TrusthubV1CustomerProfile] = field(default=None)
    
