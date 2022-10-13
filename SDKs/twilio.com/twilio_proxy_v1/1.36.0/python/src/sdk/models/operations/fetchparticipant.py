from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_PARTICIPANT_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclass
class FetchParticipantPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    session_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'SessionSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

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
    proxy_v1_service_session_participant: Optional[shared.ProxyV1ServiceSessionParticipant] = field(default=None)
    
