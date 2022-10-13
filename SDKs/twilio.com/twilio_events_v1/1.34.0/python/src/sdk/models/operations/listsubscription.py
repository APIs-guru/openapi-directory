from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SUBSCRIPTION_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class ListSubscriptionQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    sink_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SinkSid', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSubscriptionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListSubscriptionRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListSubscriptionQueryParams = field(default=None)
    security: ListSubscriptionSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListSubscription200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListSubscription200ApplicationJSONListSubscriptionResponse:
    meta: Optional[ListSubscription200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    subscriptions: Optional[List[shared.EventsV1Subscription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptions' }})
    

@dataclass
class ListSubscriptionResponses:
    list_subscription_response: Optional[ListSubscription200ApplicationJSONListSubscriptionResponse] = field(default=None)
    

@dataclass
class ListSubscriptionResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListSubscriptionResponses]] = field(default=None)
    status_code: int = field(default=None)
    
