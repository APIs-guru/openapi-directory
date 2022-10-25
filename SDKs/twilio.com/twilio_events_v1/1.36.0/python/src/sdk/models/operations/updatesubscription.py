from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_SUBSCRIPTION_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class UpdateSubscriptionPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSubscriptionUpdateSubscriptionRequest:
    description: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Description' }})
    sink_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SinkSid' }})
    

@dataclass
class UpdateSubscriptionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSubscriptionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSubscriptionPathParams = field(default=None)
    request: Optional[UpdateSubscriptionUpdateSubscriptionRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSubscriptionSecurity = field(default=None)
    

@dataclass
class UpdateSubscriptionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    events_v1_subscription: Optional[shared.EventsV1Subscription] = field(default=None)
    
