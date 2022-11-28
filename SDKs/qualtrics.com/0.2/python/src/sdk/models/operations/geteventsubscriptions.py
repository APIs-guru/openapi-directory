from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEventSubscriptionsPathParams:
    subscription_id: str = field(metadata={'path_param': { 'field_name': 'SubscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventSubscriptionsRequest:
    path_params: GetEventSubscriptionsPathParams = field()
    

@dataclass
class GetEventSubscriptionsResponse:
    content_type: str = field()
    status_code: int = field()
    event_subscriptions_response: Optional[shared.EventSubscriptionsResponse] = field(default=None)
    
