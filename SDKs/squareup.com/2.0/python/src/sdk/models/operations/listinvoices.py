from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListInvoicesQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location_id: str = field(default=None, metadata={'query_param': { 'field_name': 'location_id', 'style': 'form', 'explode': True }})
    

@dataclass
class ListInvoicesSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ListInvoicesRequest:
    query_params: ListInvoicesQueryParams = field(default=None)
    security: ListInvoicesSecurity = field(default=None)
    

@dataclass
class ListInvoicesResponse:
    content_type: str = field(default=None)
    list_invoices_response: Optional[shared.ListInvoicesResponse] = field(default=None)
    status_code: int = field(default=None)
    
