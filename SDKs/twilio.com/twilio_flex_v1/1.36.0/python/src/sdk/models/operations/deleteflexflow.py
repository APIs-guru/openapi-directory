from dataclasses import dataclass, field
from typing import Optional
DELETE_FLEX_FLOW_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class DeleteFlexFlowPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFlexFlowSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteFlexFlowRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteFlexFlowPathParams = field(default=None)
    security: DeleteFlexFlowSecurity = field(default=None)
    

@dataclass
class DeleteFlexFlowResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
