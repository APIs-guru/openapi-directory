from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_ENGAGEMENT_CONTEXT_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class FetchEngagementContextPathParams:
    engagement_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'EngagementSid', 'style': 'simple', 'explode': False }})
    flow_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchEngagementContextSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchEngagementContextRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchEngagementContextPathParams = field(default=None)
    security: FetchEngagementContextSecurity = field(default=None)
    

@dataclass
class FetchEngagementContextResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    studio_v1_flow_engagement_engagement_context: Optional[shared.StudioV1FlowEngagementEngagementContext] = field(default=None)
    
