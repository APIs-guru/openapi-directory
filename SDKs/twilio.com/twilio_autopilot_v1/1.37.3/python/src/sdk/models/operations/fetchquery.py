from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_QUERY_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class FetchQueryPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchQuerySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchQueryRequest:
    path_params: FetchQueryPathParams = field()
    security: FetchQuerySecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchQueryResponse:
    content_type: str = field()
    status_code: int = field()
    autopilot_v1_assistant_query: Optional[shared.AutopilotV1AssistantQuery] = field(default=None)
    
