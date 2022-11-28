from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_STEP_CONTEXT_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class FetchStepContextPathParams:
    engagement_sid: str = field(metadata={'path_param': { 'field_name': 'EngagementSid', 'style': 'simple', 'explode': False }})
    flow_sid: str = field(metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    step_sid: str = field(metadata={'path_param': { 'field_name': 'StepSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchStepContextSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchStepContextRequest:
    path_params: FetchStepContextPathParams = field()
    security: FetchStepContextSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchStepContextResponse:
    content_type: str = field()
    status_code: int = field()
    studio_v1_flow_engagement_step_step_context: Optional[shared.StudioV1FlowEngagementStepStepContext] = field(default=None)
    
