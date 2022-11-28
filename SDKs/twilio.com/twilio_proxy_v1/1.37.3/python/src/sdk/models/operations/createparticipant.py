from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_PARTICIPANT_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclass
class CreateParticipantPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    session_sid: str = field(metadata={'path_param': { 'field_name': 'SessionSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateParticipantCreateParticipantRequest:
    identifier: str = field(metadata={'form': { 'field_name': 'Identifier' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    proxy_identifier: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ProxyIdentifier' }})
    proxy_identifier_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ProxyIdentifierSid' }})
    

@dataclass
class CreateParticipantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateParticipantRequest:
    path_params: CreateParticipantPathParams = field()
    security: CreateParticipantSecurity = field()
    request: Optional[CreateParticipantCreateParticipantRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateParticipantResponse:
    content_type: str = field()
    status_code: int = field()
    proxy_v1_service_session_participant: Optional[shared.ProxyV1ServiceSessionParticipant] = field(default=None)
    
