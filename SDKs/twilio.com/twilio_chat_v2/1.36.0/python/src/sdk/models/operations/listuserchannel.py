from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_USER_CHANNEL_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class ListUserChannelPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    user_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListUserChannelQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListUserChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListUserChannelRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListUserChannelPathParams = field(default=None)
    query_params: ListUserChannelQueryParams = field(default=None)
    security: ListUserChannelSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListUserChannel200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListUserChannel200ApplicationJSONListUserChannelResponse:
    channels: Optional[List[shared.ChatV2ServiceUserUserChannel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channels' }})
    meta: Optional[ListUserChannel200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListUserChannelResponse:
    content_type: str = field(default=None)
    list_user_channel_response: Optional[ListUserChannel200ApplicationJSONListUserChannelResponse] = field(default=None)
    status_code: int = field(default=None)
    
