from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetUsersIDTransactionsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetUsersIDTransactionsTypeEnum(str, Enum):
    DEBIT = "debit"
    CREDIT = "credit"


@dataclass
class GetUsersIDTransactionsQueryParams:
    end_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    only_uncategorised: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'only_uncategorised', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    start_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    type: Optional[GetUsersIDTransactionsTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersIDTransactionsRequest:
    path_params: GetUsersIDTransactionsPathParams = field()
    query_params: GetUsersIDTransactionsQueryParams = field()
    

@dataclass
class GetUsersIDTransactionsResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    transactions: Optional[List[shared.Transaction]] = field(default=None)
    
