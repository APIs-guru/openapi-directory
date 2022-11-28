from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SUBSCRIBED_EVENT_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class FetchSubscribedEventPathParams:
    subscription_sid: str = field(metadata={'path_param': { 'field_name': 'SubscriptionSid', 'style': 'simple', 'explode': False }})
    type: str = field(metadata={'path_param': { 'field_name': 'Type', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSubscribedEventSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSubscribedEventRequest:
    path_params: FetchSubscribedEventPathParams = field()
    security: FetchSubscribedEventSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchSubscribedEventResponse:
    content_type: str = field()
    status_code: int = field()
    events_v1_subscription_subscribed_event: Optional[shared.EventsV1SubscriptionSubscribedEvent] = field(default=None)
    
