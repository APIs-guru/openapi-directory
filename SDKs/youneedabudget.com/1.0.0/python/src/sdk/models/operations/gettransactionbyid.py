from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTransactionByIDPathParams:
    budget_id: str = field(default=None, metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    transaction_id: str = field(default=None, metadata={'path_param': { 'field_name': 'transaction_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransactionByIDRequest:
    path_params: GetTransactionByIDPathParams = field(default=None)
    

@dataclass
class GetTransactionByIDResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    transaction_response: Optional[shared.TransactionResponse] = field(default=None)
    
