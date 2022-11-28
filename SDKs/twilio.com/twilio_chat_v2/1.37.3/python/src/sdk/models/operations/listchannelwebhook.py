from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_CHANNEL_WEBHOOK_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class ListChannelWebhookPathParams:
    channel_sid: str = field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListChannelWebhookQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListChannelWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListChannelWebhookListChannelWebhookResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListChannelWebhookListChannelWebhookResponse:
    meta: Optional[ListChannelWebhookListChannelWebhookResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    webhooks: Optional[List[shared.ChatV2ServiceChannelChannelWebhook]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhooks') }})
    

@dataclass
class ListChannelWebhookRequest:
    path_params: ListChannelWebhookPathParams = field()
    query_params: ListChannelWebhookQueryParams = field()
    security: ListChannelWebhookSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListChannelWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    list_channel_webhook_response: Optional[ListChannelWebhookListChannelWebhookResponse] = field(default=None)
    
