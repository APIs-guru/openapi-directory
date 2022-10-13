from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_CALL_RECORDING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListCallRecordingPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListCallRecordingQueryParams:
    date_created: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreated', 'style': 'form', 'explode': True }})
    date_created_less_than_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreated<', 'style': 'form', 'explode': True }})
    date_created_greater_than_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreated>', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListCallRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListCallRecordingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListCallRecordingPathParams = field(default=None)
    query_params: ListCallRecordingQueryParams = field(default=None)
    security: ListCallRecordingSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListCallRecording200ApplicationJSONListCallRecordingResponse:
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_uri' }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_uri' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_uri' }})
    recordings: Optional[List[shared.APIV2010AccountCallCallRecording]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordings' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass
class ListCallRecordingResponses:
    list_call_recording_response: Optional[ListCallRecording200ApplicationJSONListCallRecordingResponse] = field(default=None)
    

@dataclass
class ListCallRecordingResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListCallRecordingResponses]] = field(default=None)
    status_code: int = field(default=None)
    
