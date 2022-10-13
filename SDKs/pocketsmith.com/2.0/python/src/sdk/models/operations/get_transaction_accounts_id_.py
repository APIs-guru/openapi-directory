from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTransactionAccountsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransactionAccountsIDRequest:
    path_params: GetTransactionAccountsIDPathParams = field(default=None)
    

@dataclass
class GetTransactionAccountsIDResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    transaction_account: Optional[shared.TransactionAccount] = field(default=None)
    
