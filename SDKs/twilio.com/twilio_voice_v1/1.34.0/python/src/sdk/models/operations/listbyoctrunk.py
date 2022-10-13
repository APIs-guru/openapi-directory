from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_BYOC_TRUNK_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class ListByocTrunkQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListByocTrunkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListByocTrunkRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListByocTrunkQueryParams = field(default=None)
    security: ListByocTrunkSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListByocTrunk200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListByocTrunk200ApplicationJSONListByocTrunkResponse:
    byoc_trunks: Optional[List[shared.VoiceV1ByocTrunk]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'byoc_trunks' }})
    meta: Optional[ListByocTrunk200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListByocTrunkResponses:
    list_byoc_trunk_response: Optional[ListByocTrunk200ApplicationJSONListByocTrunkResponse] = field(default=None)
    

@dataclass
class ListByocTrunkResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListByocTrunkResponses]] = field(default=None)
    status_code: int = field(default=None)
    
