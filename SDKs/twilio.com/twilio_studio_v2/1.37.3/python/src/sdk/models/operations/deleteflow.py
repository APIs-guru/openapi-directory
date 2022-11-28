from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_FLOW_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class DeleteFlowPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFlowSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteFlowRequest:
    path_params: DeleteFlowPathParams = field()
    security: DeleteFlowSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteFlowResponse:
    content_type: str = field()
    status_code: int = field()
    
