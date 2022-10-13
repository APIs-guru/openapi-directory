from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_CALL_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchCallPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchCallSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchCallRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchCallPathParams = field(default=None)
    security: FetchCallSecurity = field(default=None)
    

@dataclass
class FetchCallResponses:
    api_v2010_account_call: Optional[shared.APIV2010AccountCall] = field(default=None)
    

@dataclass
class FetchCallResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchCallResponses]] = field(default=None)
    status_code: int = field(default=None)
    
