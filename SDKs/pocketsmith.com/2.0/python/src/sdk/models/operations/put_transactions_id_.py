from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutTransactionsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutTransactionsIDQueryParams:
    labels: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'labels', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class PutTransactionsIDRequestBody:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    category_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category_id' }})
    cheque_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cheque_number' }})
    date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    is_transfer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_transfer' }})
    memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memo' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    payee: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee' }})
    

@dataclass
class PutTransactionsIDRequest:
    path_params: PutTransactionsIDPathParams = field(default=None)
    query_params: PutTransactionsIDQueryParams = field(default=None)
    request: Optional[PutTransactionsIDRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutTransactionsIDResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    transaction: Optional[shared.Transaction] = field(default=None)
    
