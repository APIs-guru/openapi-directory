from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_EXECUTION_STEP_CONTEXT_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class FetchExecutionStepContextPathParams:
    execution_sid: str = field(metadata={'path_param': { 'field_name': 'ExecutionSid', 'style': 'simple', 'explode': False }})
    flow_sid: str = field(metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    step_sid: str = field(metadata={'path_param': { 'field_name': 'StepSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchExecutionStepContextSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchExecutionStepContextRequest:
    path_params: FetchExecutionStepContextPathParams = field()
    security: FetchExecutionStepContextSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchExecutionStepContextResponse:
    content_type: str = field()
    status_code: int = field()
    studio_v2_flow_execution_execution_step_execution_step_context: Optional[shared.StudioV2FlowExecutionExecutionStepExecutionStepContext] = field(default=None)
    
