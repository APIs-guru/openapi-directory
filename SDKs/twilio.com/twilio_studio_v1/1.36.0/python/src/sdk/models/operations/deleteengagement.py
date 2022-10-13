from dataclasses import dataclass, field
from typing import Optional
DELETE_ENGAGEMENT_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class DeleteEngagementPathParams:
    flow_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteEngagementSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteEngagementRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteEngagementPathParams = field(default=None)
    security: DeleteEngagementSecurity = field(default=None)
    

@dataclass
class DeleteEngagementResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
