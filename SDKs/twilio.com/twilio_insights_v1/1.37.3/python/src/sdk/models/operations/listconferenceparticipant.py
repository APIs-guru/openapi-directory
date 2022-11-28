from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_CONFERENCE_PARTICIPANT_SERVERS = [
	"https://insights.twilio.com",
]


@dataclass
class ListConferenceParticipantPathParams:
    conference_sid: str = field(metadata={'path_param': { 'field_name': 'ConferenceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListConferenceParticipantQueryParams:
    events: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Events', 'style': 'form', 'explode': True }})
    label: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Label', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    participant_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ParticipantSid', 'style': 'form', 'explode': True }})
    

@dataclass
class ListConferenceParticipantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListConferenceParticipantListConferenceParticipantResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListConferenceParticipantListConferenceParticipantResponse:
    meta: Optional[ListConferenceParticipantListConferenceParticipantResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    participants: Optional[List[shared.InsightsV1ConferenceConferenceParticipant]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participants') }})
    

@dataclass
class ListConferenceParticipantRequest:
    path_params: ListConferenceParticipantPathParams = field()
    query_params: ListConferenceParticipantQueryParams = field()
    security: ListConferenceParticipantSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListConferenceParticipantResponse:
    content_type: str = field()
    status_code: int = field()
    list_conference_participant_response: Optional[ListConferenceParticipantListConferenceParticipantResponse] = field(default=None)
    
