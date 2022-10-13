from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_CUSTOMER_PROFILE_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class UpdateCustomerProfilePathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCustomerProfileSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateCustomerProfileRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateCustomerProfilePathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateCustomerProfileSecurity = field(default=None)
    

@dataclass
class UpdateCustomerProfileResponses:
    trusthub_v1_customer_profile: Optional[shared.TrusthubV1CustomerProfile] = field(default=None)
    

@dataclass
class UpdateCustomerProfileResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateCustomerProfileResponses]] = field(default=None)
    status_code: int = field(default=None)
    
