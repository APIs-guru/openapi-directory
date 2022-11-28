from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


CREATE_EXECUTION_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class CreateExecutionPathParams:
    flow_sid: str = field(metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateExecutionCreateExecutionRequest:
    from_: str = field(metadata={'form': { 'field_name': 'From' }})
    to: str = field(metadata={'form': { 'field_name': 'To' }})
    parameters: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Parameters' }})
    

@dataclass
class CreateExecutionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateExecutionRequest:
    path_params: CreateExecutionPathParams = field()
    security: CreateExecutionSecurity = field()
    request: Optional[CreateExecutionCreateExecutionRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateExecutionResponse:
    content_type: str = field()
    status_code: int = field()
    studio_v1_flow_execution: Optional[shared.StudioV1FlowExecution] = field(default=None)
    
