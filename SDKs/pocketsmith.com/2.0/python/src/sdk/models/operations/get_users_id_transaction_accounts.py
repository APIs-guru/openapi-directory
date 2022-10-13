from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUsersIDTransactionAccountsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersIDTransactionAccountsRequest:
    path_params: GetUsersIDTransactionAccountsPathParams = field(default=None)
    

@dataclass
class GetUsersIDTransactionAccountsResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    transaction_accounts: Optional[List[shared.TransactionAccount]] = field(default=None)
    
