from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_ENGAGEMENT_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class DeleteEngagementPathParams:
    flow_sid: str = field(metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteEngagementSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteEngagementRequest:
    path_params: DeleteEngagementPathParams = field()
    security: DeleteEngagementSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteEngagementResponse:
    content_type: str = field()
    status_code: int = field()
    
