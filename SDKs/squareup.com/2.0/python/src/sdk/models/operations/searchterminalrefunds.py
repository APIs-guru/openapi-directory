from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SearchTerminalRefundsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SearchTerminalRefundsRequest:
    request: shared.SearchTerminalRefundsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: SearchTerminalRefundsSecurity = field(default=None)
    

@dataclass
class SearchTerminalRefundsResponse:
    content_type: str = field(default=None)
    search_terminal_refunds_response: Optional[shared.SearchTerminalRefundsResponse] = field(default=None)
    status_code: int = field(default=None)
    
