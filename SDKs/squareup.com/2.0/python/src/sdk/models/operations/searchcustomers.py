from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SearchCustomersSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SearchCustomersRequest:
    request: shared.SearchCustomersRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: SearchCustomersSecurity = field(default=None)
    

@dataclass
class SearchCustomersResponse:
    content_type: str = field(default=None)
    search_customers_response: Optional[shared.SearchCustomersResponse] = field(default=None)
    status_code: int = field(default=None)
    
