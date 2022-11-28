from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


UPDATE_FLOW_VALIDATE_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class UpdateFlowValidateUpdateFlowValidateRequest:
    definition: Any = field(metadata={'form': { 'field_name': 'Definition' }})
    friendly_name: str = field(metadata={'form': { 'field_name': 'FriendlyName' }})
    status: shared.FlowValidateEnumStatusEnum = field(metadata={'form': { 'field_name': 'Status' }})
    commit_message: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CommitMessage' }})
    

@dataclass
class UpdateFlowValidateSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateFlowValidateRequest:
    security: UpdateFlowValidateSecurity = field()
    request: Optional[UpdateFlowValidateUpdateFlowValidateRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateFlowValidateResponse:
    content_type: str = field()
    status_code: int = field()
    studio_v2_flow_validate: Optional[shared.StudioV2FlowValidate] = field(default=None)
    
