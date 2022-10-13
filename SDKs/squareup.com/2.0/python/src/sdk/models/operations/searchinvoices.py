from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SearchInvoicesSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SearchInvoicesRequest:
    request: shared.SearchInvoicesRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: SearchInvoicesSecurity = field(default=None)
    

@dataclass
class SearchInvoicesResponse:
    content_type: str = field(default=None)
    search_invoices_response: Optional[shared.SearchInvoicesResponse] = field(default=None)
    status_code: int = field(default=None)
    
