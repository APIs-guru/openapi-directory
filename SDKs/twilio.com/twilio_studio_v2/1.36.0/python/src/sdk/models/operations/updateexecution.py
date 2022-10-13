from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_EXECUTION_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class UpdateExecutionPathParams:
    flow_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateExecutionRequestBodyUpdateExecutionRequest:
    status: shared.ExecutionEnumStatusEnum = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    

@dataclass
class UpdateExecutionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateExecutionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateExecutionPathParams = field(default=None)
    request: Optional[UpdateExecutionRequestBodyUpdateExecutionRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateExecutionSecurity = field(default=None)
    

@dataclass
class UpdateExecutionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    studio_v2_flow_execution: Optional[shared.StudioV2FlowExecution] = field(default=None)
    
