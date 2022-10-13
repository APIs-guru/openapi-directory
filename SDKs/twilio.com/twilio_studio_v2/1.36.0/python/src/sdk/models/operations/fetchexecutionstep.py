from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_EXECUTION_STEP_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class FetchExecutionStepPathParams:
    execution_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ExecutionSid', 'style': 'simple', 'explode': False }})
    flow_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchExecutionStepSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchExecutionStepRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchExecutionStepPathParams = field(default=None)
    security: FetchExecutionStepSecurity = field(default=None)
    

@dataclass
class FetchExecutionStepResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    studio_v2_flow_execution_execution_step: Optional[shared.StudioV2FlowExecutionExecutionStep] = field(default=None)
    
