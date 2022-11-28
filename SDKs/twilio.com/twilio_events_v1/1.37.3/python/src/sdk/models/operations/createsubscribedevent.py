from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_SUBSCRIBED_EVENT_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class CreateSubscribedEventPathParams:
    subscription_sid: str = field(metadata={'path_param': { 'field_name': 'SubscriptionSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSubscribedEventCreateSubscribedEventRequest:
    type: str = field(metadata={'form': { 'field_name': 'Type' }})
    schema_version: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'SchemaVersion' }})
    

@dataclass
class CreateSubscribedEventSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSubscribedEventRequest:
    path_params: CreateSubscribedEventPathParams = field()
    security: CreateSubscribedEventSecurity = field()
    request: Optional[CreateSubscribedEventCreateSubscribedEventRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateSubscribedEventResponse:
    content_type: str = field()
    status_code: int = field()
    events_v1_subscription_subscribed_event: Optional[shared.EventsV1SubscriptionSubscribedEvent] = field(default=None)
    
