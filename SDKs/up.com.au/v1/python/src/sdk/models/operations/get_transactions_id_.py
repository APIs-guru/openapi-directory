from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTransactionsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransactionsIDRequest:
    path_params: GetTransactionsIDPathParams = field(default=None)
    

@dataclass
class GetTransactionsIDResponse:
    content_type: str = field(default=None)
    get_transaction_response: Optional[shared.GetTransactionResponse] = field(default=None)
    status_code: int = field(default=None)
    
