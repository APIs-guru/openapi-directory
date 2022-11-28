from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


CREATE_SUBSCRIPTION_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class CreateSubscriptionCreateSubscriptionRequest:
    description: str = field(metadata={'form': { 'field_name': 'Description' }})
    sink_sid: str = field(metadata={'form': { 'field_name': 'SinkSid' }})
    types: List[Any] = field(metadata={'form': { 'field_name': 'Types' }})
    

@dataclass
class CreateSubscriptionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSubscriptionRequest:
    security: CreateSubscriptionSecurity = field()
    request: Optional[CreateSubscriptionCreateSubscriptionRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateSubscriptionResponse:
    content_type: str = field()
    status_code: int = field()
    events_v1_subscription: Optional[shared.EventsV1Subscription] = field(default=None)
    
