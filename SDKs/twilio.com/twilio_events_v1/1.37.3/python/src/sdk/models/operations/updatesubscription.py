from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_SUBSCRIPTION_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class UpdateSubscriptionPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSubscriptionUpdateSubscriptionRequest:
    description: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Description' }})
    sink_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SinkSid' }})
    

@dataclass
class UpdateSubscriptionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSubscriptionRequest:
    path_params: UpdateSubscriptionPathParams = field()
    security: UpdateSubscriptionSecurity = field()
    request: Optional[UpdateSubscriptionUpdateSubscriptionRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateSubscriptionResponse:
    content_type: str = field()
    status_code: int = field()
    events_v1_subscription: Optional[shared.EventsV1Subscription] = field(default=None)
    
