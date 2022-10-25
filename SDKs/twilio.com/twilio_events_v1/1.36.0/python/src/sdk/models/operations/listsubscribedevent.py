from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SUBSCRIBED_EVENT_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class ListSubscribedEventPathParams:
    subscription_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'SubscriptionSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSubscribedEventQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSubscribedEventSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListSubscribedEventRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListSubscribedEventPathParams = field(default=None)
    query_params: ListSubscribedEventQueryParams = field(default=None)
    security: ListSubscribedEventSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListSubscribedEventListSubscribedEventResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListSubscribedEventListSubscribedEventResponse:
    meta: Optional[ListSubscribedEventListSubscribedEventResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    types: Optional[List[shared.EventsV1SubscriptionSubscribedEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'types' }})
    

@dataclass
class ListSubscribedEventResponse:
    content_type: str = field(default=None)
    list_subscribed_event_response: Optional[ListSubscribedEventListSubscribedEventResponse] = field(default=None)
    status_code: int = field(default=None)
    
