from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_CUSTOMER_PROFILE_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class DeleteCustomerProfilePathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCustomerProfileSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteCustomerProfileRequest:
    path_params: DeleteCustomerProfilePathParams = field()
    security: DeleteCustomerProfileSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteCustomerProfileResponse:
    content_type: str = field()
    status_code: int = field()
    
