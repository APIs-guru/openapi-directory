from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_RESTORE_ASSISTANT_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class UpdateRestoreAssistantUpdateRestoreAssistantRequest:
    assistant: str = field(metadata={'form': { 'field_name': 'Assistant' }})
    

@dataclass
class UpdateRestoreAssistantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateRestoreAssistantRequest:
    security: UpdateRestoreAssistantSecurity = field()
    request: Optional[UpdateRestoreAssistantUpdateRestoreAssistantRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateRestoreAssistantResponse:
    content_type: str = field()
    status_code: int = field()
    autopilot_v1_restore_assistant: Optional[shared.AutopilotV1RestoreAssistant] = field(default=None)
    
