from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_IP_RECORD_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class ListIPRecordQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListIPRecordSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListIPRecordListIPRecordResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListIPRecordListIPRecordResponse:
    ip_records: Optional[List[shared.VoiceV1IPRecord]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_records') }})
    meta: Optional[ListIPRecordListIPRecordResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListIPRecordRequest:
    query_params: ListIPRecordQueryParams = field()
    security: ListIPRecordSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListIPRecordResponse:
    content_type: str = field()
    status_code: int = field()
    list_ip_record_response: Optional[ListIPRecordListIPRecordResponse] = field(default=None)
    
