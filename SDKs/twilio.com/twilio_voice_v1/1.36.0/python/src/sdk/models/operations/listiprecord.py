from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_IP_RECORD_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class ListIPRecordQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListIPRecordSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListIPRecordRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListIPRecordQueryParams = field(default=None)
    security: ListIPRecordSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListIPRecord200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListIPRecord200ApplicationJSONListIPRecordResponse:
    ip_records: Optional[List[shared.VoiceV1IPRecord]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_records' }})
    meta: Optional[ListIPRecord200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListIPRecordResponse:
    content_type: str = field(default=None)
    list_ip_record_response: Optional[ListIPRecord200ApplicationJSONListIPRecordResponse] = field(default=None)
    status_code: int = field(default=None)
    
