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
class CreateSubscribedEventCreateSubscribedEventRequest:
    schema_version: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'SchemaVersion' }})
    type: str = field(default=None, metadata={'form': { 'field_name': 'Type' }})
    

@dataclass
class CreateSubscribedEventSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSubscribedEventRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateSubscribedEventPathParams = field(default=None)
    request: Optional[CreateSubscribedEventCreateSubscribedEventRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSubscribedEventSecurity = field(default=None)
    

@dataclass
class CreateSubscribedEventResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    events_v1_subscription_subscribed_event: Optional[shared.EventsV1SubscriptionSubscribedEvent] = field(default=None)
    
