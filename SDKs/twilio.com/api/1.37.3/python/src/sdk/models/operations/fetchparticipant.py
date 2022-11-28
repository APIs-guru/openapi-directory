from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_PARTICIPANT_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchParticipantPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    conference_sid: str = field(metadata={'path_param': { 'field_name': 'ConferenceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchParticipantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchParticipantRequest:
    path_params: FetchParticipantPathParams = field()
    security: FetchParticipantSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchParticipantResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_conference_participant: Optional[shared.APIV2010AccountConferenceParticipant] = field(default=None)
    
