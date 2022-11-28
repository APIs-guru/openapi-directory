from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_EXECUTION_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class FetchExecutionPathParams:
    flow_sid: str = field(metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchExecutionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchExecutionRequest:
    path_params: FetchExecutionPathParams = field()
    security: FetchExecutionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchExecutionResponse:
    content_type: str = field()
    status_code: int = field()
    studio_v2_flow_execution: Optional[shared.StudioV2FlowExecution] = field(default=None)
    
