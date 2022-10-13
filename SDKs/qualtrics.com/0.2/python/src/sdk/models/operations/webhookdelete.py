from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class WebhookDeleteRequest:
    request: shared.SubscribeToEventBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class WebhookDeleteResponse:
    content_type: str = field(default=None)
    event_subscriptions_response: Optional[shared.EventSubscriptionsResponse] = field(default=None)
    status_code: int = field(default=None)
    
