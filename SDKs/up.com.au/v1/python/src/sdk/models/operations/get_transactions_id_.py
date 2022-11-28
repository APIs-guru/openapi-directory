from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTransactionsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransactionsIDRequest:
    path_params: GetTransactionsIDPathParams = field()
    

@dataclass
class GetTransactionsIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_transaction_response: Optional[shared.GetTransactionResponse] = field(default=None)
    
