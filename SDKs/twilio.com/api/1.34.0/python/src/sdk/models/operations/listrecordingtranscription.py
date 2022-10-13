from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_RECORDING_TRANSCRIPTION_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListRecordingTranscriptionPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    recording_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'RecordingSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListRecordingTranscriptionQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListRecordingTranscriptionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListRecordingTranscriptionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListRecordingTranscriptionPathParams = field(default=None)
    query_params: ListRecordingTranscriptionQueryParams = field(default=None)
    security: ListRecordingTranscriptionSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListRecordingTranscription200ApplicationJSONListRecordingTranscriptionResponse:
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_uri' }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_uri' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_uri' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    transcriptions: Optional[List[shared.APIV2010AccountRecordingRecordingTranscription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transcriptions' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass
class ListRecordingTranscriptionResponses:
    list_recording_transcription_response: Optional[ListRecordingTranscription200ApplicationJSONListRecordingTranscriptionResponse] = field(default=None)
    

@dataclass
class ListRecordingTranscriptionResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListRecordingTranscriptionResponses]] = field(default=None)
    status_code: int = field(default=None)
    
