from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_EXECUTION_CONTEXT_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class FetchExecutionContextPathParams:
    execution_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ExecutionSid', 'style': 'simple', 'explode': False }})
    flow_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchExecutionContextSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchExecutionContextRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchExecutionContextPathParams = field(default=None)
    security: FetchExecutionContextSecurity = field(default=None)
    

@dataclass
class FetchExecutionContextResponses:
    studio_v1_flow_execution_execution_context: Optional[shared.StudioV1FlowExecutionExecutionContext] = field(default=None)
    

@dataclass
class FetchExecutionContextResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchExecutionContextResponses]] = field(default=None)
    status_code: int = field(default=None)
    
