from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_WEBHOOK_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class ListWebhookPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListWebhookQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListWebhookRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListWebhookPathParams = field(default=None)
    query_params: ListWebhookQueryParams = field(default=None)
    security: ListWebhookSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListWebhook200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListWebhook200ApplicationJSONListWebhookResponse:
    meta: Optional[ListWebhook200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    webhooks: Optional[List[shared.AutopilotV1AssistantWebhook]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhooks' }})
    

@dataclass
class ListWebhookResponse:
    content_type: str = field(default=None)
    list_webhook_response: Optional[ListWebhook200ApplicationJSONListWebhookResponse] = field(default=None)
    status_code: int = field(default=None)
    
