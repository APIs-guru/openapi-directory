from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_EXECUTION_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class DeleteExecutionPathParams:
    flow_sid: str = field(metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteExecutionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteExecutionRequest:
    path_params: DeleteExecutionPathParams = field()
    security: DeleteExecutionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteExecutionResponse:
    content_type: str = field()
    status_code: int = field()
    
