from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_EXECUTION_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class FetchExecutionPathParams:
    flow_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchExecutionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchExecutionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchExecutionPathParams = field(default=None)
    security: FetchExecutionSecurity = field(default=None)
    

@dataclass
class FetchExecutionResponses:
    studio_v1_flow_execution: Optional[shared.StudioV1FlowExecution] = field(default=None)
    

@dataclass
class FetchExecutionResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchExecutionResponses]] = field(default=None)
    status_code: int = field(default=None)
    
