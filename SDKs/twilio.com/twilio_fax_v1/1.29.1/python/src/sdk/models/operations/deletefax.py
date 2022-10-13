from dataclasses import dataclass, field
from typing import Optional
DELETE_FAX_SERVERS = [
	"https://fax.twilio.com",
]


@dataclass
class DeleteFaxPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFaxSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteFaxRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteFaxPathParams = field(default=None)
    security: DeleteFaxSecurity = field(default=None)
    

@dataclass
class DeleteFaxResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
