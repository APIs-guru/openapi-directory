from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_PARTICIPANT_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListParticipantPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    conference_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConferenceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListParticipantQueryParams:
    coaching: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Coaching', 'style': 'form', 'explode': True }})
    hold: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Hold', 'style': 'form', 'explode': True }})
    muted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Muted', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListParticipantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListParticipantRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListParticipantPathParams = field(default=None)
    query_params: ListParticipantQueryParams = field(default=None)
    security: ListParticipantSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListParticipantListParticipantResponse:
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_uri' }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_uri' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    participants: Optional[List[shared.APIV2010AccountConferenceParticipant]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'participants' }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_uri' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass
class ListParticipantResponse:
    content_type: str = field(default=None)
    list_participant_response: Optional[ListParticipantListParticipantResponse] = field(default=None)
    status_code: int = field(default=None)
    
