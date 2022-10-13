from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_EXECUTION_STEP_CONTEXT_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class FetchExecutionStepContextPathParams:
    execution_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ExecutionSid', 'style': 'simple', 'explode': False }})
    flow_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    step_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'StepSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchExecutionStepContextSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchExecutionStepContextRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchExecutionStepContextPathParams = field(default=None)
    security: FetchExecutionStepContextSecurity = field(default=None)
    

@dataclass
class FetchExecutionStepContextResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    studio_v2_flow_execution_execution_step_execution_step_context: Optional[shared.StudioV2FlowExecutionExecutionStepExecutionStepContext] = field(default=None)
    
