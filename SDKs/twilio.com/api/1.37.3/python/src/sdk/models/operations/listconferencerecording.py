from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_CONFERENCE_RECORDING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListConferenceRecordingPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    conference_sid: str = field(metadata={'path_param': { 'field_name': 'ConferenceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListConferenceRecordingQueryParams:
    date_created: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreated', 'style': 'form', 'explode': True }})
    date_created_less_than_: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreated<', 'style': 'form', 'explode': True }})
    date_created_greater_than_: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreated>', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListConferenceRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListConferenceRecordingListConferenceRecordingResponse:
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    recordings: Optional[List[shared.APIV2010AccountConferenceConferenceRecording]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordings') }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass
class ListConferenceRecordingRequest:
    path_params: ListConferenceRecordingPathParams = field()
    query_params: ListConferenceRecordingQueryParams = field()
    security: ListConferenceRecordingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListConferenceRecordingResponse:
    content_type: str = field()
    status_code: int = field()
    list_conference_recording_response: Optional[ListConferenceRecordingListConferenceRecordingResponse] = field(default=None)
    
