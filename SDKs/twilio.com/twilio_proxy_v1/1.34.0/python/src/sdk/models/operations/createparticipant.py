from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_PARTICIPANT_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclass
class CreateParticipantPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    session_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'SessionSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateParticipantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateParticipantRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateParticipantPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateParticipantSecurity = field(default=None)
    

@dataclass
class CreateParticipantResponses:
    proxy_v1_service_session_participant: Optional[shared.ProxyV1ServiceSessionParticipant] = field(default=None)
    

@dataclass
class CreateParticipantResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateParticipantResponses]] = field(default=None)
    status_code: int = field(default=None)
    
