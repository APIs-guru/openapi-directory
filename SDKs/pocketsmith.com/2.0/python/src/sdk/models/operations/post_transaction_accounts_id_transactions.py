from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostTransactionAccountsIDTransactionsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostTransactionAccountsIDTransactionsRequestBody:
    amount: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    date_: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    payee: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee') }})
    category_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category_id') }})
    cheque_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cheque_number') }})
    is_transfer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_transfer') }})
    labels: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memo') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    

@dataclass
class PostTransactionAccountsIDTransactionsRequest:
    path_params: PostTransactionAccountsIDTransactionsPathParams = field()
    request: Optional[PostTransactionAccountsIDTransactionsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostTransactionAccountsIDTransactionsResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    transaction: Optional[shared.Transaction] = field(default=None)
    
