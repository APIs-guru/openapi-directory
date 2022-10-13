from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_FLOW_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class CreateFlowSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateFlowRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateFlowSecurity = field(default=None)
    

@dataclass
class CreateFlowResponses:
    studio_v2_flow: Optional[shared.StudioV2Flow] = field(default=None)
    

@dataclass
class CreateFlowResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateFlowResponses]] = field(default=None)
    status_code: int = field(default=None)
    
