from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_SUBSCRIBED_EVENT_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class UpdateSubscribedEventPathParams:
    subscription_sid: str = field(metadata={'path_param': { 'field_name': 'SubscriptionSid', 'style': 'simple', 'explode': False }})
    type: str = field(metadata={'path_param': { 'field_name': 'Type', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSubscribedEventUpdateSubscribedEventRequest:
    schema_version: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'SchemaVersion' }})
    

@dataclass
class UpdateSubscribedEventSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSubscribedEventRequest:
    path_params: UpdateSubscribedEventPathParams = field()
    security: UpdateSubscribedEventSecurity = field()
    request: Optional[UpdateSubscribedEventUpdateSubscribedEventRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateSubscribedEventResponse:
    content_type: str = field()
    status_code: int = field()
    events_v1_subscription_subscribed_event: Optional[shared.EventsV1SubscriptionSubscribedEvent] = field(default=None)
    
