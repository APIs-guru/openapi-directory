from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_RECORDING_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class ListRecordingQueryParams:
    date_created_after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreatedAfter', 'style': 'form', 'explode': True }})
    date_created_before: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreatedBefore', 'style': 'form', 'explode': True }})
    grouping_sid: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'GroupingSid', 'style': 'form', 'explode': True }})
    media_type: Optional[shared.RecordingEnumTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'MediaType', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    source_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SourceSid', 'style': 'form', 'explode': True }})
    status: Optional[shared.RecordingEnumStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclass
class ListRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListRecordingRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListRecordingQueryParams = field(default=None)
    security: ListRecordingSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListRecordingListRecordingResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListRecordingListRecordingResponse:
    meta: Optional[ListRecordingListRecordingResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    recordings: Optional[List[shared.VideoV1Recording]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordings' }})
    

@dataclass
class ListRecordingResponse:
    content_type: str = field(default=None)
    list_recording_response: Optional[ListRecordingListRecordingResponse] = field(default=None)
    status_code: int = field(default=None)
    
