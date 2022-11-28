from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_FLOW_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class FetchFlowPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchFlowSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchFlowRequest:
    path_params: FetchFlowPathParams = field()
    security: FetchFlowSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchFlowResponse:
    content_type: str = field()
    status_code: int = field()
    studio_v1_flow: Optional[shared.StudioV1Flow] = field(default=None)
    
