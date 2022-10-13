from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_OUTGOING_CALLER_ID_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchOutgoingCallerIDPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchOutgoingCallerIDSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchOutgoingCallerIDRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchOutgoingCallerIDPathParams = field(default=None)
    security: FetchOutgoingCallerIDSecurity = field(default=None)
    

@dataclass
class FetchOutgoingCallerIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_outgoing_caller_id: Optional[shared.APIV2010AccountOutgoingCallerID] = field(default=None)
    
