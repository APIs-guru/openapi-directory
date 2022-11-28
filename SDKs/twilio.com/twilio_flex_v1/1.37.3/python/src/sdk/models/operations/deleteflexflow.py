from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_FLEX_FLOW_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class DeleteFlexFlowPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFlexFlowSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteFlexFlowRequest:
    path_params: DeleteFlexFlowPathParams = field()
    security: DeleteFlexFlowSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteFlexFlowResponse:
    content_type: str = field()
    status_code: int = field()
    
