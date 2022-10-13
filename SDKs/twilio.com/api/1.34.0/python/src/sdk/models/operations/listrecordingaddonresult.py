from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_RECORDING_ADD_ON_RESULT_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListRecordingAddOnResultPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    reference_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ReferenceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListRecordingAddOnResultQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListRecordingAddOnResultSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListRecordingAddOnResultRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListRecordingAddOnResultPathParams = field(default=None)
    query_params: ListRecordingAddOnResultQueryParams = field(default=None)
    security: ListRecordingAddOnResultSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListRecordingAddOnResult200ApplicationJSONListRecordingAddOnResultResponse:
    add_on_results: Optional[List[shared.APIV2010AccountRecordingRecordingAddOnResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_on_results' }})
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_uri' }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_uri' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_uri' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass
class ListRecordingAddOnResultResponses:
    list_recording_add_on_result_response: Optional[ListRecordingAddOnResult200ApplicationJSONListRecordingAddOnResultResponse] = field(default=None)
    

@dataclass
class ListRecordingAddOnResultResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListRecordingAddOnResultResponses]] = field(default=None)
    status_code: int = field(default=None)
    
