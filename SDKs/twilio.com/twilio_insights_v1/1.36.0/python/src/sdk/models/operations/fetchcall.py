from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_CALL_SERVERS = [
	"https://insights.twilio.com",
]


@dataclass
class FetchCallPathParams:
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
class FetchCallResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    insights_v1_call: Optional[shared.InsightsV1Call] = field(default=None)
    
