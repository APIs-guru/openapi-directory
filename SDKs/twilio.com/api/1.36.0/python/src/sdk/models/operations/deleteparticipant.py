from dataclasses import dataclass, field
from typing import Optional
DELETE_PARTICIPANT_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteParticipantPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    conference_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConferenceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteParticipantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteParticipantRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteParticipantPathParams = field(default=None)
    security: DeleteParticipantSecurity = field(default=None)
    

@dataclass
class DeleteParticipantResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
