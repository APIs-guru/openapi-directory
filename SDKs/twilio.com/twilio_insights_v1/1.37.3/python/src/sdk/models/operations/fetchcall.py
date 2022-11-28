from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_CALL_SERVERS = [
	"https://insights.twilio.com",
]


@dataclass
class FetchCallPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchCallSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchCallRequest:
    path_params: FetchCallPathParams = field()
    security: FetchCallSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchCallResponse:
    content_type: str = field()
    status_code: int = field()
    insights_v1_call: Optional[shared.InsightsV1Call] = field(default=None)
    
