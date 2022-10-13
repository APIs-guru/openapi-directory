from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GetTransactionsByPayeePathParams:
    budget_id: str = field(default=None, metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    payee_id: str = field(default=None, metadata={'path_param': { 'field_name': 'payee_id', 'style': 'simple', 'explode': False }})
    
class GetTransactionsByPayeeTypeEnum(str, Enum):
    UNCATEGORIZED = "uncategorized"
    UNAPPROVED = "unapproved"


@dataclass
class GetTransactionsByPayeeQueryParams:
    last_knowledge_of_server: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'last_knowledge_of_server', 'style': 'form', 'explode': True }})
    since_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'since_date', 'style': 'form', 'explode': True }})
    type: Optional[GetTransactionsByPayeeTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTransactionsByPayeeRequest:
    path_params: GetTransactionsByPayeePathParams = field(default=None)
    query_params: GetTransactionsByPayeeQueryParams = field(default=None)
    

@dataclass
class GetTransactionsByPayeeResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    hybrid_transactions_response: Optional[shared.HybridTransactionsResponse] = field(default=None)
    status_code: int = field(default=None)
    
