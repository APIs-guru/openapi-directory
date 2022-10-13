from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared
UPDATE_FLOW_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class UpdateFlowPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateFlowRequestBodyUpdateFlowRequest:
    commit_message: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CommitMessage' }})
    definition: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Definition' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    status: shared.FlowEnumStatusEnum = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    

@dataclass
class UpdateFlowSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateFlowRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateFlowPathParams = field(default=None)
    request: Optional[UpdateFlowRequestBodyUpdateFlowRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateFlowSecurity = field(default=None)
    

@dataclass
class UpdateFlowResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    studio_v2_flow: Optional[shared.StudioV2Flow] = field(default=None)
    
