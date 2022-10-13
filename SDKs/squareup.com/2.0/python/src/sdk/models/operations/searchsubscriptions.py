from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SearchSubscriptionsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SearchSubscriptionsRequest:
    request: shared.SearchSubscriptionsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: SearchSubscriptionsSecurity = field(default=None)
    

@dataclass
class SearchSubscriptionsResponse:
    content_type: str = field(default=None)
    search_subscriptions_response: Optional[shared.SearchSubscriptionsResponse] = field(default=None)
    status_code: int = field(default=None)
    
