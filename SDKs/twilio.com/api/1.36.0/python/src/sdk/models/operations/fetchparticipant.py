from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_PARTICIPANT_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchParticipantPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    conference_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConferenceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchParticipantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchParticipantRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchParticipantPathParams = field(default=None)
    security: FetchParticipantSecurity = field(default=None)
    

@dataclass
class FetchParticipantResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_conference_participant: Optional[shared.APIV2010AccountConferenceParticipant] = field(default=None)
    
