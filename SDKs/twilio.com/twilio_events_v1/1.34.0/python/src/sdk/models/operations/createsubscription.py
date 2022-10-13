from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_SUBSCRIPTION_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class CreateSubscriptionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSubscriptionRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSubscriptionSecurity = field(default=None)
    

@dataclass
class CreateSubscriptionResponses:
    events_v1_subscription: Optional[shared.EventsV1Subscription] = field(default=None)
    

@dataclass
class CreateSubscriptionResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateSubscriptionResponses]] = field(default=None)
    status_code: int = field(default=None)
    
