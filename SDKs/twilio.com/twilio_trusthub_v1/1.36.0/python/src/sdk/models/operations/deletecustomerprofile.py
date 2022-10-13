from dataclasses import dataclass, field
from typing import Optional
DELETE_CUSTOMER_PROFILE_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class DeleteCustomerProfilePathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCustomerProfileSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteCustomerProfileRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteCustomerProfilePathParams = field(default=None)
    security: DeleteCustomerProfileSecurity = field(default=None)
    

@dataclass
class DeleteCustomerProfileResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
