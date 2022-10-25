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
class CreateParticipantCreateParticipantRequest:
    fail_on_participant_conflict: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'FailOnParticipantConflict' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    identifier: str = field(default=None, metadata={'form': { 'field_name': 'Identifier' }})
    proxy_identifier: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ProxyIdentifier' }})
    proxy_identifier_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ProxyIdentifierSid' }})
    

@dataclass
class CreateParticipantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateParticipantRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateParticipantPathParams = field(default=None)
    request: Optional[CreateParticipantCreateParticipantRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateParticipantSecurity = field(default=None)
    

@dataclass
class CreateParticipantResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    proxy_v1_service_session_participant: Optional[shared.ProxyV1ServiceSessionParticipant] = field(default=None)
    
