from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SearchOrdersSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SearchOrdersRequest:
    request: shared.SearchOrdersRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: SearchOrdersSecurity = field(default=None)
    

@dataclass
class SearchOrdersResponse:
    content_type: str = field(default=None)
    search_orders_response: Optional[shared.SearchOrdersResponse] = field(default=None)
    status_code: int = field(default=None)
    
