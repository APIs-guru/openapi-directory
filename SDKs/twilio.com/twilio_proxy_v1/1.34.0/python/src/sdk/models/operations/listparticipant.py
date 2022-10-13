from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_PARTICIPANT_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclass
class ListParticipantPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    session_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'SessionSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListParticipantQueryParams:
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
class ListParticipant200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListParticipant200ApplicationJSONListParticipantResponse:
    meta: Optional[ListParticipant200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    participants: Optional[List[shared.ProxyV1ServiceSessionParticipant]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'participants' }})
    

@dataclass
class ListParticipantResponses:
    list_participant_response: Optional[ListParticipant200ApplicationJSONListParticipantResponse] = field(default=None)
    

@dataclass
class ListParticipantResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListParticipantResponses]] = field(default=None)
    status_code: int = field(default=None)
    
