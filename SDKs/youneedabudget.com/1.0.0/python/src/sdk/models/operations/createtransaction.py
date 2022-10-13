from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateTransactionPathParams:
    budget_id: str = field(default=None, metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTransactionRequest:
    path_params: CreateTransactionPathParams = field(default=None)
    request: shared.SaveTransactionsWrapper = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateTransactionResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    save_transactions_response: Optional[shared.SaveTransactionsResponse] = field(default=None)
    status_code: int = field(default=None)
    
