from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_RECORDING_ADD_ON_RESULT_PAYLOAD_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListRecordingAddOnResultPayloadPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    add_on_result_sid: str = field(metadata={'path_param': { 'field_name': 'AddOnResultSid', 'style': 'simple', 'explode': False }})
    reference_sid: str = field(metadata={'path_param': { 'field_name': 'ReferenceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListRecordingAddOnResultPayloadQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListRecordingAddOnResultPayloadSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse:
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    payloads: Optional[List[shared.APIV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payloads') }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass
class ListRecordingAddOnResultPayloadRequest:
    path_params: ListRecordingAddOnResultPayloadPathParams = field()
    query_params: ListRecordingAddOnResultPayloadQueryParams = field()
    security: ListRecordingAddOnResultPayloadSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListRecordingAddOnResultPayloadResponse:
    content_type: str = field()
    status_code: int = field()
    list_recording_add_on_result_payload_response: Optional[ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse] = field(default=None)
    
