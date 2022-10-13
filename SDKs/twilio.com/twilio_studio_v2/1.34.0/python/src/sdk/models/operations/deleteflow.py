from dataclasses import dataclass, field
from typing import Optional
DELETE_FLOW_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class DeleteFlowPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFlowSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteFlowRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteFlowPathParams = field(default=None)
    security: DeleteFlowSecurity = field(default=None)
    

@dataclass
class DeleteFlowResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
