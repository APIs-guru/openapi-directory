from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_FLEX_FLOW_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class FetchFlexFlowPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchFlexFlowSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchFlexFlowRequest:
    path_params: FetchFlexFlowPathParams = field()
    security: FetchFlexFlowSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchFlexFlowResponse:
    content_type: str = field()
    status_code: int = field()
    flex_v1_flex_flow: Optional[shared.FlexV1FlexFlow] = field(default=None)
    
