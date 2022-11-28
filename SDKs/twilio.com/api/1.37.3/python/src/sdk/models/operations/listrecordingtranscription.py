from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_RECORDING_TRANSCRIPTION_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListRecordingTranscriptionPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    recording_sid: str = field(metadata={'path_param': { 'field_name': 'RecordingSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListRecordingTranscriptionQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListRecordingTranscriptionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListRecordingTranscriptionListRecordingTranscriptionResponse:
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    transcriptions: Optional[List[shared.APIV2010AccountRecordingRecordingTranscription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transcriptions') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass
class ListRecordingTranscriptionRequest:
    path_params: ListRecordingTranscriptionPathParams = field()
    query_params: ListRecordingTranscriptionQueryParams = field()
    security: ListRecordingTranscriptionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListRecordingTranscriptionResponse:
    content_type: str = field()
    status_code: int = field()
    list_recording_transcription_response: Optional[ListRecordingTranscriptionListRecordingTranscriptionResponse] = field(default=None)
    
