from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_OUTGOING_CALLER_ID_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteOutgoingCallerIDPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteOutgoingCallerIDSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteOutgoingCallerIDRequest:
    path_params: DeleteOutgoingCallerIDPathParams = field()
    security: DeleteOutgoingCallerIDSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteOutgoingCallerIDResponse:
    content_type: str = field()
    status_code: int = field()
    
