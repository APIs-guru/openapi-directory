from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetBetHistoryQueryParams:
    date_from: str = field(metadata={'query_param': { 'field_name': 'dateFrom', 'style': 'form', 'explode': True }})
    date_to: str = field(metadata={'query_param': { 'field_name': 'dateTo', 'style': 'form', 'explode': True }})
    exclude: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'exclude', 'style': 'form', 'explode': False }})
    fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    include: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': False }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    settled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'settled', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetBetHistoryHeaders:
    api_key: str = field(metadata={'header': { 'field_name': 'apiKey', 'style': 'simple', 'explode': False }})
    api_secret: str = field(metadata={'header': { 'field_name': 'apiSecret', 'style': 'simple', 'explode': False }})
    api_ticket: str = field(metadata={'header': { 'field_name': 'apiTicket', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBetHistoryRequest:
    headers: GetBetHistoryHeaders = field()
    query_params: GetBetHistoryQueryParams = field()
    

@dataclass
class GetBetHistoryResponse:
    content_type: str = field()
    status_code: int = field()
    bet_history_response: Optional[shared.BetHistoryResponse] = field(default=None)
    errors: Optional[shared.Errors] = field(default=None)
    
