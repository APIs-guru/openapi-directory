from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
CREATE_EXECUTION_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class CreateExecutionPathParams:
    flow_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateExecutionRequestBodyCreateExecutionRequest:
    from_: str = field(default=None, metadata={'form': { 'field_name': 'From' }})
    parameters: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Parameters' }})
    to: str = field(default=None, metadata={'form': { 'field_name': 'To' }})
    

@dataclass
class CreateExecutionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateExecutionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateExecutionPathParams = field(default=None)
    request: Optional[CreateExecutionRequestBodyCreateExecutionRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateExecutionSecurity = field(default=None)
    

@dataclass
class CreateExecutionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    studio_v2_flow_execution: Optional[shared.StudioV2FlowExecution] = field(default=None)
    
