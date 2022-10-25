from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
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
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListPlayerStreamerRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListPlayerStreamerQueryParams = field(default=None)
    security: ListPlayerStreamerSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListPlayerStreamerListPlayerStreamerResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListPlayerStreamerListPlayerStreamerResponse:
    meta: Optional[ListPlayerStreamerListPlayerStreamerResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    player_streamers: Optional[List[shared.MediaV1PlayerStreamer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'player_streamers' }})
    

@dataclass
class ListPlayerStreamerResponse:
    content_type: str = field(default=None)
    list_player_streamer_response: Optional[ListPlayerStreamerListPlayerStreamerResponse] = field(default=None)
    status_code: int = field(default=None)
    
