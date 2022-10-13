from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_SUBSCRIBED_EVENT_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class CreateSubscribedEventPathParams:
    subscription_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'SubscriptionSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSubscribedEventSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSubscribedEventRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateSubscribedEventPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSubscribedEventSecurity = field(default=None)
    

@dataclass
class CreateSubscribedEventResponses:
    events_v1_subscription_subscribed_event: Optional[shared.EventsV1SubscriptionSubscribedEvent] = field(default=None)
    

@dataclass
class CreateSubscribedEventResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateSubscribedEventResponses]] = field(default=None)
    status_code: int = field(default=None)
    
