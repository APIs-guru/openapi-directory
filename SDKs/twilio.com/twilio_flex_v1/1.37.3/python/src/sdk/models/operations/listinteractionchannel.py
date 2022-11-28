from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_INTERACTION_CHANNEL_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class ListInteractionChannelPathParams:
    interaction_sid: str = field(metadata={'path_param': { 'field_name': 'InteractionSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListInteractionChannelQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListInteractionChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListInteractionChannelListInteractionChannelResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListInteractionChannelListInteractionChannelResponse:
    channels: Optional[List[shared.FlexV1InteractionInteractionChannel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    meta: Optional[ListInteractionChannelListInteractionChannelResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListInteractionChannelRequest:
    path_params: ListInteractionChannelPathParams = field()
    query_params: ListInteractionChannelQueryParams = field()
    security: ListInteractionChannelSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListInteractionChannelResponse:
    content_type: str = field()
    status_code: int = field()
    list_interaction_channel_response: Optional[ListInteractionChannelListInteractionChannelResponse] = field(default=None)
    
