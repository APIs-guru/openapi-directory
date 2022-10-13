from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared
UPDATE_FLOW_VALIDATE_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class UpdateFlowValidateRequestBodyUpdateFlowValidateRequest:
    commit_message: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CommitMessage' }})
    definition: Any = field(default=None, metadata={'form': { 'field_name': 'Definition' }})
    friendly_name: str = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    status: shared.FlowValidateEnumStatusEnum = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    

@dataclass
class UpdateFlowValidateSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateFlowValidateRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[UpdateFlowValidateRequestBodyUpdateFlowValidateRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateFlowValidateSecurity = field(default=None)
    

@dataclass
class UpdateFlowValidateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    studio_v2_flow_validate: Optional[shared.StudioV2FlowValidate] = field(default=None)
    
