from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_FLOW_REVISION_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class FetchFlowRevisionPathParams:
    revision: str = field(default=None, metadata={'path_param': { 'field_name': 'Revision', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchFlowRevisionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchFlowRevisionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchFlowRevisionPathParams = field(default=None)
    security: FetchFlowRevisionSecurity = field(default=None)
    

@dataclass
class FetchFlowRevisionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    studio_v2_flow_flow_revision: Optional[shared.StudioV2FlowFlowRevision] = field(default=None)
    
