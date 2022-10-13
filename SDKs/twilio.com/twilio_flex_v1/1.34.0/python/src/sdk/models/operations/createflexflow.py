from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_FLEX_FLOW_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class CreateFlexFlowSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateFlexFlowRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateFlexFlowSecurity = field(default=None)
    

@dataclass
class CreateFlexFlowResponses:
    flex_v1_flex_flow: Optional[shared.FlexV1FlexFlow] = field(default=None)
    

@dataclass
class CreateFlexFlowResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateFlexFlowResponses]] = field(default=None)
    status_code: int = field(default=None)
    
