from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_SUBSCRIBED_EVENT_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class UpdateSubscribedEventPathParams:
    subscription_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'SubscriptionSid', 'style': 'simple', 'explode': False }})
    type: str = field(default=None, metadata={'path_param': { 'field_name': 'Type', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSubscribedEventRequestBodyUpdateSubscribedEventRequest:
    schema_version: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'SchemaVersion' }})
    

@dataclass
class UpdateSubscribedEventSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSubscribedEventRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSubscribedEventPathParams = field(default=None)
    request: Optional[UpdateSubscribedEventRequestBodyUpdateSubscribedEventRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSubscribedEventSecurity = field(default=None)
    

@dataclass
class UpdateSubscribedEventResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    events_v1_subscription_subscribed_event: Optional[shared.EventsV1SubscriptionSubscribedEvent] = field(default=None)
    
