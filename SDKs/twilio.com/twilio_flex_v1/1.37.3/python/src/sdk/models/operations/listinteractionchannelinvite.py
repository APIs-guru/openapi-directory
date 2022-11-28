from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_INTERACTION_CHANNEL_INVITE_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class ListInteractionChannelInvitePathParams:
    channel_sid: str = field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    interaction_sid: str = field(metadata={'path_param': { 'field_name': 'InteractionSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListInteractionChannelInviteQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListInteractionChannelInviteSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListInteractionChannelInviteListInteractionChannelInviteResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListInteractionChannelInviteListInteractionChannelInviteResponse:
    invites: Optional[List[shared.FlexV1InteractionInteractionChannelInteractionChannelInvite]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invites') }})
    meta: Optional[ListInteractionChannelInviteListInteractionChannelInviteResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListInteractionChannelInviteRequest:
    path_params: ListInteractionChannelInvitePathParams = field()
    query_params: ListInteractionChannelInviteQueryParams = field()
    security: ListInteractionChannelInviteSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListInteractionChannelInviteResponse:
    content_type: str = field()
    status_code: int = field()
    list_interaction_channel_invite_response: Optional[ListInteractionChannelInviteListInteractionChannelInviteResponse] = field(default=None)
    
