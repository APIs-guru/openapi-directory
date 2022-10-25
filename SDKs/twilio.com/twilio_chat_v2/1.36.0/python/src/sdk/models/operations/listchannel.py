from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_CHANNEL_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class ListChannelPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListChannelQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    type: Optional[List[shared.ChannelEnumChannelTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'Type', 'style': 'form', 'explode': True }})
    

@dataclass
class ListChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListChannelRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListChannelPathParams = field(default=None)
    query_params: ListChannelQueryParams = field(default=None)
    security: ListChannelSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListChannelListChannelResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListChannelListChannelResponse:
    channels: Optional[List[shared.ChatV2ServiceChannel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channels' }})
    meta: Optional[ListChannelListChannelResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListChannelResponse:
    content_type: str = field(default=None)
    list_channel_response: Optional[ListChannelListChannelResponse] = field(default=None)
    status_code: int = field(default=None)
    
