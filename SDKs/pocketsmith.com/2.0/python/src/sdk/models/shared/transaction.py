from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TransactionStatusEnum(str, Enum):
    PENDING = "pending"
    POSTED = "posted"

class TransactionTypeEnum(str, Enum):
    DEBIT = "debit"
    CREDIT = "credit"


@dataclass_json
@dataclass
class Transaction:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    category: Optional[Category] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    cheque_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cheque_number') }})
    closing_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closing_balance') }})
    date_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_transfer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_transfer') }})
    labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memo') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    original_payee: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('original_payee') }})
    payee: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee') }})
    status: Optional[TransactionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    transaction_account: Optional[TransactionAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction_account') }})
    type: Optional[TransactionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    upload_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload_source') }})
    
