from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_ENGAGEMENT_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class FetchEngagementPathParams:
    flow_sid: str = field(metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchEngagementSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchEngagementRequest:
    path_params: FetchEngagementPathParams = field()
    security: FetchEngagementSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchEngagementResponse:
    content_type: str = field()
    status_code: int = field()
    studio_v1_flow_engagement: Optional[shared.StudioV1FlowEngagement] = field(default=None)
    
