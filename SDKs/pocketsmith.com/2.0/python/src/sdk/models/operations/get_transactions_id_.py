from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTransactionsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransactionsIDRequest:
    path_params: GetTransactionsIDPathParams = field()
    

@dataclass
class GetTransactionsIDResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    transaction: Optional[shared.Transaction] = field(default=None)
    
