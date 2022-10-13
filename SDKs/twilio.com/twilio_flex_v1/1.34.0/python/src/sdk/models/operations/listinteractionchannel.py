from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_INTERACTION_CHANNEL_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class ListInteractionChannelPathParams:
    interaction_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'InteractionSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListInteractionChannelQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListInteractionChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListInteractionChannelRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListInteractionChannelPathParams = field(default=None)
    query_params: ListInteractionChannelQueryParams = field(default=None)
    security: ListInteractionChannelSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListInteractionChannel200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListInteractionChannel200ApplicationJSONListInteractionChannelResponse:
    channels: Optional[List[shared.FlexV1InteractionInteractionChannel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channels' }})
    meta: Optional[ListInteractionChannel200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListInteractionChannelResponses:
    list_interaction_channel_response: Optional[ListInteractionChannel200ApplicationJSONListInteractionChannelResponse] = field(default=None)
    

@dataclass
class ListInteractionChannelResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListInteractionChannelResponses]] = field(default=None)
    status_code: int = field(default=None)
    
