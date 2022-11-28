from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class WebhookDeleteRequest:
    request: shared.SubscribeToEventBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class WebhookDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    event_subscriptions_response: Optional[shared.EventSubscriptionsResponse] = field(default=None)
    
