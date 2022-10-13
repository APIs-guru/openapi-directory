from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_QUERY_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class CreateQueryPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateQuerySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateQueryRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateQueryPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateQuerySecurity = field(default=None)
    

@dataclass
class CreateQueryResponses:
    autopilot_v1_assistant_query: Optional[shared.AutopilotV1AssistantQuery] = field(default=None)
    

@dataclass
class CreateQueryResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateQueryResponses]] = field(default=None)
    status_code: int = field(default=None)
    
