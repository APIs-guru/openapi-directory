from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetAccountsIDTransactionsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetAccountsIDTransactionsTypeEnum(str, Enum):
    DEBIT = "debit"
    CREDIT = "credit"


@dataclass
class GetAccountsIDTransactionsQueryParams:
    end_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    only_uncategorised: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'only_uncategorised', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    start_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    type: Optional[GetAccountsIDTransactionsTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAccountsIDTransactionsRequest:
    path_params: GetAccountsIDTransactionsPathParams = field(default=None)
    query_params: GetAccountsIDTransactionsQueryParams = field(default=None)
    

@dataclass
class GetAccountsIDTransactionsResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    transactions: Optional[List[shared.Transaction]] = field(default=None)
    
