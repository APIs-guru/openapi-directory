from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTransactionAccountsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransactionAccountsIDRequest:
    path_params: GetTransactionAccountsIDPathParams = field()
    

@dataclass
class GetTransactionAccountsIDResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    transaction_account: Optional[shared.TransactionAccount] = field(default=None)
    
