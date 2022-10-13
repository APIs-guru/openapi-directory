from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
CREATE_MESSAGE_INTERACTION_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclass
class CreateMessageInteractionPathParams:
    participant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ParticipantSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    session_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'SessionSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateMessageInteractionRequestBodyCreateMessageInteractionRequest:
    body: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Body' }})
    media_url: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'MediaUrl' }})
    

@dataclass
class CreateMessageInteractionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateMessageInteractionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateMessageInteractionPathParams = field(default=None)
    request: Optional[CreateMessageInteractionRequestBodyCreateMessageInteractionRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateMessageInteractionSecurity = field(default=None)
    

@dataclass
class CreateMessageInteractionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    proxy_v1_service_session_participant_message_interaction: Optional[shared.ProxyV1ServiceSessionParticipantMessageInteraction] = field(default=None)
    
