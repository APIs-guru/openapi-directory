from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
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
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListSubscriptionListSubscriptionResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListSubscriptionListSubscriptionResponse:
    meta: Optional[ListSubscriptionListSubscriptionResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    subscriptions: Optional[List[shared.EventsV1Subscription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptions') }})
    

@dataclass
class ListSubscriptionRequest:
    query_params: ListSubscriptionQueryParams = field()
    security: ListSubscriptionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListSubscriptionResponse:
    content_type: str = field()
    status_code: int = field()
    list_subscription_response: Optional[ListSubscriptionListSubscriptionResponse] = field(default=None)
    
