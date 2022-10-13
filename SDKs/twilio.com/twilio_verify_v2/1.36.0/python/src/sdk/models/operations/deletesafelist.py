from dataclasses import dataclass, field
from typing import Optional
DELETE_SAFELIST_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class DeleteSafelistPathParams:
    phone_number: str = field(default=None, metadata={'path_param': { 'field_name': 'PhoneNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSafelistSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSafelistRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteSafelistPathParams = field(default=None)
    security: DeleteSafelistSecurity = field(default=None)
    

@dataclass
class DeleteSafelistResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
