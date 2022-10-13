from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SearchTerminalCheckoutsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SearchTerminalCheckoutsRequest:
    request: shared.SearchTerminalCheckoutsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: SearchTerminalCheckoutsSecurity = field(default=None)
    

@dataclass
class SearchTerminalCheckoutsResponse:
    content_type: str = field(default=None)
    search_terminal_checkouts_response: Optional[shared.SearchTerminalCheckoutsResponse] = field(default=None)
    status_code: int = field(default=None)
    
