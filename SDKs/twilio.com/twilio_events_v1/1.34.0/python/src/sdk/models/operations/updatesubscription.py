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
class UpdateSubscriptionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSubscriptionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSubscriptionPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSubscriptionSecurity = field(default=None)
    

@dataclass
class UpdateSubscriptionResponses:
    events_v1_subscription: Optional[shared.EventsV1Subscription] = field(default=None)
    

@dataclass
class UpdateSubscriptionResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateSubscriptionResponses]] = field(default=None)
    status_code: int = field(default=None)
    
