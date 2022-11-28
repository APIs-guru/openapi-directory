from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_RECORDING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListRecordingPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListRecordingQueryParams:
    call_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CallSid', 'style': 'form', 'explode': True }})
    conference_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ConferenceSid', 'style': 'form', 'explode': True }})
    date_created: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreated', 'style': 'form', 'explode': True }})
    date_created_less_than_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreated<', 'style': 'form', 'explode': True }})
    date_created_greater_than_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreated>', 'style': 'form', 'explode': True }})
    include_soft_deleted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'IncludeSoftDeleted', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListRecordingListRecordingResponse:
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    recordings: Optional[List[shared.APIV2010AccountRecording]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordings') }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass
class ListRecordingRequest:
    path_params: ListRecordingPathParams = field()
    query_params: ListRecordingQueryParams = field()
    security: ListRecordingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListRecordingResponse:
    content_type: str = field()
    status_code: int = field()
    list_recording_response: Optional[ListRecordingListRecordingResponse] = field(default=None)
    
