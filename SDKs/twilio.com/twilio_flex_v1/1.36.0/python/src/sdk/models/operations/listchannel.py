from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_CHANNEL_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class ListChannelQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListChannelRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListChannelQueryParams = field(default=None)
    security: ListChannelSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListChannel200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListChannel200ApplicationJSONListChannelResponse:
    flex_chat_channels: Optional[List[shared.FlexV1Channel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flex_chat_channels' }})
    meta: Optional[ListChannel200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListChannelResponse:
    content_type: str = field(default=None)
    list_channel_response: Optional[ListChannel200ApplicationJSONListChannelResponse] = field(default=None)
    status_code: int = field(default=None)
    
