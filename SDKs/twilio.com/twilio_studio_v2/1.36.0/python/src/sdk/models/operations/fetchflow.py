from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_FLOW_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class FetchFlowPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchFlowSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchFlowRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchFlowPathParams = field(default=None)
    security: FetchFlowSecurity = field(default=None)
    

@dataclass
class FetchFlowResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    studio_v2_flow: Optional[shared.StudioV2Flow] = field(default=None)
    
