from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetBetHistoryQueryParams:
    date_from: str = field(default=None, metadata={'query_param': { 'field_name': 'dateFrom', 'style': 'form', 'explode': True }})
    date_to: str = field(default=None, metadata={'query_param': { 'field_name': 'dateTo', 'style': 'form', 'explode': True }})
    exclude: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'exclude', 'style': 'form', 'explode': False }})
    fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    include: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': False }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    settled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'settled', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetBetHistoryHeaders:
    api_key: str = field(default=None, metadata={'header': { 'field_name': 'apiKey' }})
    api_secret: str = field(default=None, metadata={'header': { 'field_name': 'apiSecret' }})
    api_ticket: str = field(default=None, metadata={'header': { 'field_name': 'apiTicket' }})
    

@dataclass
class GetBetHistoryRequest:
    query_params: GetBetHistoryQueryParams = field(default=None)
    headers: GetBetHistoryHeaders = field(default=None)
    

@dataclass
class GetBetHistoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    bet_history_response: Optional[shared.BetHistoryResponse] = field(default=None)
    errors: Optional[shared.Errors] = field(default=None)
    
