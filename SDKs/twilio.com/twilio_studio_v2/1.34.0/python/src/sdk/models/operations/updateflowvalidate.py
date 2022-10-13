from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_FLOW_VALIDATE_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class UpdateFlowValidateSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateFlowValidateRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateFlowValidateSecurity = field(default=None)
    

@dataclass
class UpdateFlowValidateResponses:
    studio_v2_flow_validate: Optional[shared.StudioV2FlowValidate] = field(default=None)
    

@dataclass
class UpdateFlowValidateResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateFlowValidateResponses]] = field(default=None)
    status_code: int = field(default=None)
    
