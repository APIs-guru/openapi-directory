from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


CREATE_FLOW_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class CreateFlowCreateFlowRequest:
    definition: Any = field(metadata={'form': { 'field_name': 'Definition' }})
    friendly_name: str = field(metadata={'form': { 'field_name': 'FriendlyName' }})
    status: shared.FlowEnumStatusEnum = field(metadata={'form': { 'field_name': 'Status' }})
    commit_message: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CommitMessage' }})
    

@dataclass
class CreateFlowSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateFlowRequest:
    security: CreateFlowSecurity = field()
    request: Optional[CreateFlowCreateFlowRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateFlowResponse:
    content_type: str = field()
    status_code: int = field()
    studio_v2_flow: Optional[shared.StudioV2Flow] = field(default=None)
    
