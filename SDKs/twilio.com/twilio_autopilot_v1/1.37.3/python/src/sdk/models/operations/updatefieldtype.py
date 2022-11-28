from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_FIELD_TYPE_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class UpdateFieldTypePathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateFieldTypeUpdateFieldTypeRequest:
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class UpdateFieldTypeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateFieldTypeRequest:
    path_params: UpdateFieldTypePathParams = field()
    security: UpdateFieldTypeSecurity = field()
    request: Optional[UpdateFieldTypeUpdateFieldTypeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateFieldTypeResponse:
    content_type: str = field()
    status_code: int = field()
    autopilot_v1_assistant_field_type: Optional[shared.AutopilotV1AssistantFieldType] = field(default=None)
    
