from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutTransactionsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutTransactionsIDQueryParams:
    labels: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'labels', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class PutTransactionsIDRequestBody:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    category_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category_id') }})
    cheque_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cheque_number') }})
    date_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    is_transfer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_transfer') }})
    memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memo') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    payee: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee') }})
    

@dataclass
class PutTransactionsIDRequest:
    path_params: PutTransactionsIDPathParams = field()
    query_params: PutTransactionsIDQueryParams = field()
    request: Optional[PutTransactionsIDRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutTransactionsIDResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    transaction: Optional[shared.Transaction] = field(default=None)
    
