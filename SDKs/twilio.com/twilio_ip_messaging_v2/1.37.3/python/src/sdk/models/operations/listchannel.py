from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_CHANNEL_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class ListChannelPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListChannelQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    type: Optional[List[shared.ChannelEnumChannelTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'Type', 'style': 'form', 'explode': True }})
    

@dataclass
class ListChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListChannelListChannelResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListChannelListChannelResponse:
    channels: Optional[List[shared.IPMessagingV2ServiceChannel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    meta: Optional[ListChannelListChannelResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListChannelRequest:
    path_params: ListChannelPathParams = field()
    query_params: ListChannelQueryParams = field()
    security: ListChannelSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListChannelResponse:
    content_type: str = field()
    status_code: int = field()
    list_channel_response: Optional[ListChannelListChannelResponse] = field(default=None)
    
