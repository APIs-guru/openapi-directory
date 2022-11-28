from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_STEP_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class FetchStepPathParams:
    engagement_sid: str = field(metadata={'path_param': { 'field_name': 'EngagementSid', 'style': 'simple', 'explode': False }})
    flow_sid: str = field(metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchStepSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchStepRequest:
    path_params: FetchStepPathParams = field()
    security: FetchStepSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchStepResponse:
    content_type: str = field()
    status_code: int = field()
    studio_v1_flow_engagement_step: Optional[shared.StudioV1FlowEngagementStep] = field(default=None)
    
