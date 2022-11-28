from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTransactionByIDPathParams:
    budget_id: str = field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    transaction_id: str = field(metadata={'path_param': { 'field_name': 'transaction_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransactionByIDRequest:
    path_params: GetTransactionByIDPathParams = field()
    

@dataclass
class GetTransactionByIDResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    transaction_response: Optional[shared.TransactionResponse] = field(default=None)
    
