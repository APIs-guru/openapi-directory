from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
CREATE_ENGAGEMENT_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class CreateEngagementPathParams:
    flow_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateEngagementCreateEngagementRequest:
    from_: str = field(default=None, metadata={'form': { 'field_name': 'From' }})
    parameters: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Parameters' }})
    to: str = field(default=None, metadata={'form': { 'field_name': 'To' }})
    

@dataclass
class CreateEngagementSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateEngagementRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateEngagementPathParams = field(default=None)
    request: Optional[CreateEngagementCreateEngagementRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateEngagementSecurity = field(default=None)
    

@dataclass
class CreateEngagementResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    studio_v1_flow_engagement: Optional[shared.StudioV1FlowEngagement] = field(default=None)
    
