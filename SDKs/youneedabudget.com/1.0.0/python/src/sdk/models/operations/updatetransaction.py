from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateTransactionPathParams:
    budget_id: str = field(default=None, metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    transaction_id: str = field(default=None, metadata={'path_param': { 'field_name': 'transaction_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTransactionRequest:
    path_params: UpdateTransactionPathParams = field(default=None)
    request: shared.SaveTransactionWrapper = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateTransactionResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    transaction_response: Optional[shared.TransactionResponse] = field(default=None)
    
