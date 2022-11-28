from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_PLAYER_STREAMER_SERVERS = [
	"https://media.twilio.com",
]


@dataclass
class ListPlayerStreamerQueryParams:
    order: Optional[shared.PlayerStreamerEnumOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Order', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    status: Optional[shared.PlayerStreamerEnumStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclass
class ListPlayerStreamerSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListPlayerStreamerListPlayerStreamerResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListPlayerStreamerListPlayerStreamerResponse:
    meta: Optional[ListPlayerStreamerListPlayerStreamerResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    player_streamers: Optional[List[shared.MediaV1PlayerStreamer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('player_streamers') }})
    

@dataclass
class ListPlayerStreamerRequest:
    query_params: ListPlayerStreamerQueryParams = field()
    security: ListPlayerStreamerSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListPlayerStreamerResponse:
    content_type: str = field()
    status_code: int = field()
    list_player_streamer_response: Optional[ListPlayerStreamerListPlayerStreamerResponse] = field(default=None)
    
