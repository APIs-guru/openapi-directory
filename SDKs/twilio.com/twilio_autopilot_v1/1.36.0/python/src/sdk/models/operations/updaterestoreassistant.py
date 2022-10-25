from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_RESTORE_ASSISTANT_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class UpdateRestoreAssistantUpdateRestoreAssistantRequest:
    assistant: str = field(default=None, metadata={'form': { 'field_name': 'Assistant' }})
    

@dataclass
class UpdateRestoreAssistantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateRestoreAssistantRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[UpdateRestoreAssistantUpdateRestoreAssistantRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateRestoreAssistantSecurity = field(default=None)
    

@dataclass
class UpdateRestoreAssistantResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    autopilot_v1_restore_assistant: Optional[shared.AutopilotV1RestoreAssistant] = field(default=None)
    
