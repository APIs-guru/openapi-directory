from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_FLOW_REVISION_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class FetchFlowRevisionPathParams:
    revision: str = field(metadata={'path_param': { 'field_name': 'Revision', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchFlowRevisionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchFlowRevisionRequest:
    path_params: FetchFlowRevisionPathParams = field()
    security: FetchFlowRevisionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchFlowRevisionResponse:
    content_type: str = field()
    status_code: int = field()
    studio_v2_flow_flow_revision: Optional[shared.StudioV2FlowFlowRevision] = field(default=None)
    
