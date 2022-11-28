from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetTransactionsQueryParams:
    filter_category_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[category]', 'style': 'form', 'explode': True }})
    filter_since_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'filter[since]', 'style': 'form', 'explode': True }})
    filter_status_: Optional[Any] = field(default=None, metadata={'query_param': { 'field_name': 'filter[status]', 'style': 'form', 'explode': True }})
    filter_tag_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[tag]', 'style': 'form', 'explode': True }})
    filter_until_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'filter[until]', 'style': 'form', 'explode': True }})
    page_size_: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page[size]', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTransactionsRequest:
    query_params: GetTransactionsQueryParams = field()
    

@dataclass
class GetTransactionsResponse:
    content_type: str = field()
    status_code: int = field()
    list_transactions_response: Optional[shared.ListTransactionsResponse] = field(default=None)
    
