from dataclasses import dataclass, field
from typing import Optional
DELETE_EXECUTION_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class DeleteExecutionPathParams:
    flow_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteExecutionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteExecutionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteExecutionPathParams = field(default=None)
    security: DeleteExecutionSecurity = field(default=None)
    

@dataclass
class DeleteExecutionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
