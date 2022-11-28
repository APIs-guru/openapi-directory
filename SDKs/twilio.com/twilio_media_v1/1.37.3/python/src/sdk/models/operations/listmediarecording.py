from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_MEDIA_RECORDING_SERVERS = [
	"https://media.twilio.com",
]


@dataclass
class ListMediaRecordingQueryParams:
    order: Optional[shared.MediaRecordingEnumOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Order', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    processor_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ProcessorSid', 'style': 'form', 'explode': True }})
    source_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SourceSid', 'style': 'form', 'explode': True }})
    status: Optional[shared.MediaRecordingEnumStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclass
class ListMediaRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListMediaRecordingListMediaRecordingResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListMediaRecordingListMediaRecordingResponse:
    media_recordings: Optional[List[shared.MediaV1MediaRecording]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('media_recordings') }})
    meta: Optional[ListMediaRecordingListMediaRecordingResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListMediaRecordingRequest:
    query_params: ListMediaRecordingQueryParams = field()
    security: ListMediaRecordingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListMediaRecordingResponse:
    content_type: str = field()
    status_code: int = field()
    list_media_recording_response: Optional[ListMediaRecordingListMediaRecordingResponse] = field(default=None)
    
