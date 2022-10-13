from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEventSubscriptionsPathParams:
    subscription_id: str = field(default=None, metadata={'path_param': { 'field_name': 'SubscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventSubscriptionsRequest:
    path_params: GetEventSubscriptionsPathParams = field(default=None)
    

@dataclass
class GetEventSubscriptionsResponse:
    content_type: str = field(default=None)
    event_subscriptions_response: Optional[shared.EventSubscriptionsResponse] = field(default=None)
    status_code: int = field(default=None)
    
