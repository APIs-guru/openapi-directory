from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared
CREATE_SUBSCRIPTION_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class CreateSubscriptionCreateSubscriptionRequest:
    description: str = field(default=None, metadata={'form': { 'field_name': 'Description' }})
    sink_sid: str = field(default=None, metadata={'form': { 'field_name': 'SinkSid' }})
    types: List[Any] = field(default=None, metadata={'form': { 'field_name': 'Types' }})
    

@dataclass
class CreateSubscriptionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSubscriptionRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateSubscriptionCreateSubscriptionRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSubscriptionSecurity = field(default=None)
    

@dataclass
class CreateSubscriptionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    events_v1_subscription: Optional[shared.EventsV1Subscription] = field(default=None)
    
