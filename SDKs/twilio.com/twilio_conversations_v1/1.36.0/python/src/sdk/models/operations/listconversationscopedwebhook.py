from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_CONVERSATION_SCOPED_WEBHOOK_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class ListConversationScopedWebhookPathParams:
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListConversationScopedWebhookQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListConversationScopedWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListConversationScopedWebhookRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListConversationScopedWebhookPathParams = field(default=None)
    query_params: ListConversationScopedWebhookQueryParams = field(default=None)
    security: ListConversationScopedWebhookSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListConversationScopedWebhook200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListConversationScopedWebhook200ApplicationJSONListConversationScopedWebhookResponse:
    meta: Optional[ListConversationScopedWebhook200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    webhooks: Optional[List[shared.ConversationsV1ConversationConversationScopedWebhook]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhooks' }})
    

@dataclass
class ListConversationScopedWebhookResponse:
    content_type: str = field(default=None)
    list_conversation_scoped_webhook_response: Optional[ListConversationScopedWebhook200ApplicationJSONListConversationScopedWebhookResponse] = field(default=None)
    status_code: int = field(default=None)
    
