from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_CONVERSATION_SCOPED_WEBHOOK_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class ListConversationScopedWebhookPathParams:
    conversation_sid: str = field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListConversationScopedWebhookQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListConversationScopedWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListConversationScopedWebhookListConversationScopedWebhookResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListConversationScopedWebhookListConversationScopedWebhookResponse:
    meta: Optional[ListConversationScopedWebhookListConversationScopedWebhookResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    webhooks: Optional[List[shared.ConversationsV1ConversationConversationScopedWebhook]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhooks') }})
    

@dataclass
class ListConversationScopedWebhookRequest:
    path_params: ListConversationScopedWebhookPathParams = field()
    query_params: ListConversationScopedWebhookQueryParams = field()
    security: ListConversationScopedWebhookSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListConversationScopedWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    list_conversation_scoped_webhook_response: Optional[ListConversationScopedWebhookListConversationScopedWebhookResponse] = field(default=None)
    
