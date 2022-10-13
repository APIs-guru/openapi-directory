from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_FLOW_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class UpdateFlowPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateFlowSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateFlowRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateFlowPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateFlowSecurity = field(default=None)
    

@dataclass
class UpdateFlowResponses:
    studio_v2_flow: Optional[shared.StudioV2Flow] = field(default=None)
    

@dataclass
class UpdateFlowResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateFlowResponses]] = field(default=None)
    status_code: int = field(default=None)
    
