from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GetTransactionsByCategoryPathParams:
    budget_id: str = field(default=None, metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    category_id: str = field(default=None, metadata={'path_param': { 'field_name': 'category_id', 'style': 'simple', 'explode': False }})
    
class GetTransactionsByCategoryTypeEnum(str, Enum):
    UNCATEGORIZED = "uncategorized"
    UNAPPROVED = "unapproved"


@dataclass
class GetTransactionsByCategoryQueryParams:
    last_knowledge_of_server: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'last_knowledge_of_server', 'style': 'form', 'explode': True }})
    since_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'since_date', 'style': 'form', 'explode': True }})
    type: Optional[GetTransactionsByCategoryTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTransactionsByCategoryRequest:
    path_params: GetTransactionsByCategoryPathParams = field(default=None)
    query_params: GetTransactionsByCategoryQueryParams = field(default=None)
    

@dataclass
class GetTransactionsByCategoryResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    hybrid_transactions_response: Optional[shared.HybridTransactionsResponse] = field(default=None)
    status_code: int = field(default=None)
    
