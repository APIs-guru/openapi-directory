from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_CONFERENCE_PARTICIPANT_SERVERS = [
	"https://insights.twilio.com",
]


@dataclass
class ListConferenceParticipantPathParams:
    conference_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConferenceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListConferenceParticipantQueryParams:
    events: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Events', 'style': 'form', 'explode': True }})
    label: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Label', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    participant_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ParticipantSid', 'style': 'form', 'explode': True }})
    

@dataclass
class ListConferenceParticipantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListConferenceParticipantRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListConferenceParticipantPathParams = field(default=None)
    query_params: ListConferenceParticipantQueryParams = field(default=None)
    security: ListConferenceParticipantSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListConferenceParticipant200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListConferenceParticipant200ApplicationJSONListConferenceParticipantResponse:
    meta: Optional[ListConferenceParticipant200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    participants: Optional[List[shared.InsightsV1ConferenceConferenceParticipant]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'participants' }})
    

@dataclass
class ListConferenceParticipantResponses:
    list_conference_participant_response: Optional[ListConferenceParticipant200ApplicationJSONListConferenceParticipantResponse] = field(default=None)
    

@dataclass
class ListConferenceParticipantResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListConferenceParticipantResponses]] = field(default=None)
    status_code: int = field(default=None)
    
