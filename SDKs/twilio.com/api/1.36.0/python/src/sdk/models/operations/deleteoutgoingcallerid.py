from dataclasses import dataclass, field
from typing import Optional
DELETE_OUTGOING_CALLER_ID_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteOutgoingCallerIDPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteOutgoingCallerIDSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteOutgoingCallerIDRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteOutgoingCallerIDPathParams = field(default=None)
    security: DeleteOutgoingCallerIDSecurity = field(default=None)
    

@dataclass
class DeleteOutgoingCallerIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
