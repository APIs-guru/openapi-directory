from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUsersIDTransactionAccountsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersIDTransactionAccountsRequest:
    path_params: GetUsersIDTransactionAccountsPathParams = field()
    

@dataclass
class GetUsersIDTransactionAccountsResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    transaction_accounts: Optional[List[shared.TransactionAccount]] = field(default=None)
    
