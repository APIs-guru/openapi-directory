from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListCustomersQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    sort_field: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort_field', 'style': 'form', 'explode': True }})
    sort_order: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort_order', 'style': 'form', 'explode': True }})
    

@dataclass
class ListCustomersSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ListCustomersRequest:
    query_params: ListCustomersQueryParams = field(default=None)
    security: ListCustomersSecurity = field(default=None)
    

@dataclass
class ListCustomersResponse:
    content_type: str = field(default=None)
    list_customers_response: Optional[shared.ListCustomersResponse] = field(default=None)
    status_code: int = field(default=None)
    
