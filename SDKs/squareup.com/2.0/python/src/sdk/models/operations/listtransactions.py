from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListTransactionsPathParams:
    location_id: str = field(default=None, metadata={'path_param': { 'field_name': 'location_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListTransactionsQueryParams:
    begin_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'begin_time', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    end_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end_time', 'style': 'form', 'explode': True }})
    sort_order: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort_order', 'style': 'form', 'explode': True }})
    

@dataclass
class ListTransactionsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ListTransactionsRequest:
    path_params: ListTransactionsPathParams = field(default=None)
    query_params: ListTransactionsQueryParams = field(default=None)
    security: ListTransactionsSecurity = field(default=None)
    

@dataclass
class ListTransactionsResponse:
    content_type: str = field(default=None)
    list_transactions_response: Optional[shared.ListTransactionsResponse] = field(default=None)
    status_code: int = field(default=None)
    
