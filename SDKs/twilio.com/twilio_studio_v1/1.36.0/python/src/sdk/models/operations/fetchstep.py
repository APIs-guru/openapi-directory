from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_STEP_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class FetchStepPathParams:
    engagement_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'EngagementSid', 'style': 'simple', 'explode': False }})
    flow_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchStepSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchStepRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchStepPathParams = field(default=None)
    security: FetchStepSecurity = field(default=None)
    

@dataclass
class FetchStepResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    studio_v1_flow_engagement_step: Optional[shared.StudioV1FlowEngagementStep] = field(default=None)
    
