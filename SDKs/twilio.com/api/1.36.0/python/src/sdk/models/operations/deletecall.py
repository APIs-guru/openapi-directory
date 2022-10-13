from dataclasses import dataclass, field
from typing import Optional
DELETE_CALL_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteCallPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCallSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteCallRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteCallPathParams = field(default=None)
    security: DeleteCallSecurity = field(default=None)
    

@dataclass
class DeleteCallResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
