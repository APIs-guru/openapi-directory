from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_FLEX_FLOW_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class UpdateFlexFlowPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateFlexFlowSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateFlexFlowRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateFlexFlowPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateFlexFlowSecurity = field(default=None)
    

@dataclass
class UpdateFlexFlowResponses:
    flex_v1_flex_flow: Optional[shared.FlexV1FlexFlow] = field(default=None)
    

@dataclass
class UpdateFlexFlowResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateFlexFlowResponses]] = field(default=None)
    status_code: int = field(default=None)
    
