from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_QUERY_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class FetchQueryPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchQuerySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchQueryRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchQueryPathParams = field(default=None)
    security: FetchQuerySecurity = field(default=None)
    

@dataclass
class FetchQueryResponses:
    autopilot_v1_assistant_query: Optional[shared.AutopilotV1AssistantQuery] = field(default=None)
    

@dataclass
class FetchQueryResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchQueryResponses]] = field(default=None)
    status_code: int = field(default=None)
    
