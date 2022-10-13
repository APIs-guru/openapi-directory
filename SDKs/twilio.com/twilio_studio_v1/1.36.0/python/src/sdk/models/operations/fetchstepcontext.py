from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_STEP_CONTEXT_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class FetchStepContextPathParams:
    engagement_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'EngagementSid', 'style': 'simple', 'explode': False }})
    flow_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    step_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'StepSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchStepContextSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchStepContextRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchStepContextPathParams = field(default=None)
    security: FetchStepContextSecurity = field(default=None)
    

@dataclass
class FetchStepContextResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    studio_v1_flow_engagement_step_step_context: Optional[shared.StudioV1FlowEngagementStepStepContext] = field(default=None)
    
