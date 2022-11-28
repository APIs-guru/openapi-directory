from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetTransactionsByAccountPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    budget_id: str = field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    
class GetTransactionsByAccountTypeEnum(str, Enum):
    UNCATEGORIZED = "uncategorized"
    UNAPPROVED = "unapproved"


@dataclass
class GetTransactionsByAccountQueryParams:
    last_knowledge_of_server: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'last_knowledge_of_server', 'style': 'form', 'explode': True }})
    since_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'since_date', 'style': 'form', 'explode': True }})
    type: Optional[GetTransactionsByAccountTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTransactionsByAccountRequest:
    path_params: GetTransactionsByAccountPathParams = field()
    query_params: GetTransactionsByAccountQueryParams = field()
    

@dataclass
class GetTransactionsByAccountResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    transactions_response: Optional[shared.TransactionsResponse] = field(default=None)
    
