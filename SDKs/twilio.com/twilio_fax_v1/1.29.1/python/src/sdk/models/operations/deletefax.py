from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_FAX_SERVERS = [
	"https://fax.twilio.com",
]


@dataclass
class DeleteFaxPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFaxSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteFaxRequest:
    path_params: DeleteFaxPathParams = field()
    security: DeleteFaxSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteFaxResponse:
    content_type: str = field()
    status_code: int = field()
    
