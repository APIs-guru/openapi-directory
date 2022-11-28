from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_APPLICATION_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteApplicationPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteApplicationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteApplicationRequest:
    path_params: DeleteApplicationPathParams = field()
    security: DeleteApplicationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteApplicationResponse:
    content_type: str = field()
    status_code: int = field()
    
