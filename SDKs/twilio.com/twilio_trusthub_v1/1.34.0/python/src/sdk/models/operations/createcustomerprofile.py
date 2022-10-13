from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_CUSTOMER_PROFILE_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class CreateCustomerProfileSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCustomerProfileRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateCustomerProfileSecurity = field(default=None)
    

@dataclass
class CreateCustomerProfileResponses:
    trusthub_v1_customer_profile: Optional[shared.TrusthubV1CustomerProfile] = field(default=None)
    

@dataclass
class CreateCustomerProfileResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateCustomerProfileResponses]] = field(default=None)
    status_code: int = field(default=None)
    
