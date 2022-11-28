from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_WEB_CHANNEL_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class ListWebChannelQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListWebChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListWebChannelListWebChannelResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListWebChannelListWebChannelResponse:
    flex_chat_channels: Optional[List[shared.FlexV1WebChannel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flex_chat_channels') }})
    meta: Optional[ListWebChannelListWebChannelResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListWebChannelRequest:
    query_params: ListWebChannelQueryParams = field()
    security: ListWebChannelSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListWebChannelResponse:
    content_type: str = field()
    status_code: int = field()
    list_web_channel_response: Optional[ListWebChannelListWebChannelResponse] = field(default=None)
    
