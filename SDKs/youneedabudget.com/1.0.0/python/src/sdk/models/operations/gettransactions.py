from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetTransactionsPathParams:
    budget_id: str = field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    
class GetTransactionsTypeEnum(str, Enum):
    UNCATEGORIZED = "uncategorized"
    UNAPPROVED = "unapproved"


@dataclass
class GetTransactionsQueryParams:
    last_knowledge_of_server: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'last_knowledge_of_server', 'style': 'form', 'explode': True }})
    since_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'since_date', 'style': 'form', 'explode': True }})
    type: Optional[GetTransactionsTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTransactionsRequest:
    path_params: GetTransactionsPathParams = field()
    query_params: GetTransactionsQueryParams = field()
    

@dataclass
class GetTransactionsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    transactions_response: Optional[shared.TransactionsResponse] = field(default=None)
    
