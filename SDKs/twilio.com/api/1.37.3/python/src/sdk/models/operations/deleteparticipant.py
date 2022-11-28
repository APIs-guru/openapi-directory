from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_PARTICIPANT_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteParticipantPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    conference_sid: str = field(metadata={'path_param': { 'field_name': 'ConferenceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteParticipantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteParticipantRequest:
    path_params: DeleteParticipantPathParams = field()
    security: DeleteParticipantSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteParticipantResponse:
    content_type: str = field()
    status_code: int = field()
    
