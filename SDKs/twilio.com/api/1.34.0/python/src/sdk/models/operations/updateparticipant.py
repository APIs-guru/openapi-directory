from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_PARTICIPANT_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateParticipantPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    conference_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConferenceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateParticipantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateParticipantRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateParticipantPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateParticipantSecurity = field(default=None)
    

@dataclass
class UpdateParticipantResponses:
    api_v2010_account_conference_participant: Optional[shared.APIV2010AccountConferenceParticipant] = field(default=None)
    

@dataclass
class UpdateParticipantResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateParticipantResponses]] = field(default=None)
    status_code: int = field(default=None)
    
