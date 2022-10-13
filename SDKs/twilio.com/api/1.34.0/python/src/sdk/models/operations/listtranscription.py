from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_TRANSCRIPTION_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListTranscriptionPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListTranscriptionQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListTranscriptionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListTranscriptionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListTranscriptionPathParams = field(default=None)
    query_params: ListTranscriptionQueryParams = field(default=None)
    security: ListTranscriptionSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListTranscription200ApplicationJSONListTranscriptionResponse:
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_uri' }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_uri' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_uri' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    transcriptions: Optional[List[shared.APIV2010AccountTranscription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transcriptions' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass
class ListTranscriptionResponses:
    list_transcription_response: Optional[ListTranscription200ApplicationJSONListTranscriptionResponse] = field(default=None)
    

@dataclass
class ListTranscriptionResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListTranscriptionResponses]] = field(default=None)
    status_code: int = field(default=None)
    
