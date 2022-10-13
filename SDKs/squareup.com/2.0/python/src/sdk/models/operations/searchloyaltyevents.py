from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SearchLoyaltyEventsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SearchLoyaltyEventsRequest:
    request: shared.SearchLoyaltyEventsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: SearchLoyaltyEventsSecurity = field(default=None)
    

@dataclass
class SearchLoyaltyEventsResponse:
    content_type: str = field(default=None)
    search_loyalty_events_response: Optional[shared.SearchLoyaltyEventsResponse] = field(default=None)
    status_code: int = field(default=None)
    
