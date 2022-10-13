from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_CONFERENCE_PARTICIPANT_SERVERS = [
	"https://insights.twilio.com",
]


@dataclass
class FetchConferenceParticipantPathParams:
    conference_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConferenceSid', 'style': 'simple', 'explode': False }})
    participant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ParticipantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchConferenceParticipantQueryParams:
    events: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Events', 'style': 'form', 'explode': True }})
    metrics: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Metrics', 'style': 'form', 'explode': True }})
    

@dataclass
class FetchConferenceParticipantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchConferenceParticipantRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchConferenceParticipantPathParams = field(default=None)
    query_params: FetchConferenceParticipantQueryParams = field(default=None)
    security: FetchConferenceParticipantSecurity = field(default=None)
    

@dataclass
class FetchConferenceParticipantResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    insights_v1_conference_conference_participant: Optional[shared.InsightsV1ConferenceConferenceParticipant] = field(default=None)
    
