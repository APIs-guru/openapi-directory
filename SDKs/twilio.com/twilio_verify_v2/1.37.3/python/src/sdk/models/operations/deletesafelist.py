from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_SAFELIST_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class DeleteSafelistPathParams:
    phone_number: str = field(metadata={'path_param': { 'field_name': 'PhoneNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSafelistSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSafelistRequest:
    path_params: DeleteSafelistPathParams = field()
    security: DeleteSafelistSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteSafelistResponse:
    content_type: str = field()
    status_code: int = field()
    
