from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostTransactionAccountsIDTransactionsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostTransactionAccountsIDTransactionsRequestBody:
    amount: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    category_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category_id' }})
    cheque_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cheque_number' }})
    date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    is_transfer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_transfer' }})
    labels: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memo' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    payee: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee' }})
    

@dataclass
class PostTransactionAccountsIDTransactionsRequest:
    path_params: PostTransactionAccountsIDTransactionsPathParams = field(default=None)
    request: Optional[PostTransactionAccountsIDTransactionsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostTransactionAccountsIDTransactionsResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    transaction: Optional[shared.Transaction] = field(default=None)
    
