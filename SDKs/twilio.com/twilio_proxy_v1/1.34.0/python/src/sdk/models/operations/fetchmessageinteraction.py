from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_MESSAGE_INTERACTION_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclass
class FetchMessageInteractionPathParams:
    participant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ParticipantSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    session_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'SessionSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchMessageInteractionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchMessageInteractionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchMessageInteractionPathParams = field(default=None)
    security: FetchMessageInteractionSecurity = field(default=None)
    

@dataclass
class FetchMessageInteractionResponses:
    proxy_v1_service_session_participant_message_interaction: Optional[shared.ProxyV1ServiceSessionParticipantMessageInteraction] = field(default=None)
    

@dataclass
class FetchMessageInteractionResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchMessageInteractionResponses]] = field(default=None)
    status_code: int = field(default=None)
    
