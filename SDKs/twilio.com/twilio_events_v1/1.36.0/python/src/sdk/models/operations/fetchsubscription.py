from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_SUBSCRIPTION_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class FetchSubscriptionPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSubscriptionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSubscriptionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchSubscriptionPathParams = field(default=None)
    security: FetchSubscriptionSecurity = field(default=None)
    

@dataclass
class FetchSubscriptionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    events_v1_subscription: Optional[shared.EventsV1Subscription] = field(default=None)
    
