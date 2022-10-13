from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import category
from . import transactionaccount

class TransactionStatusEnum(str, Enum):
    PENDING = "pending"
    POSTED = "posted"

class TransactionTypeEnum(str, Enum):
    DEBIT = "debit"
    CREDIT = "credit"


@dataclass_json
@dataclass
class Transaction:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    category: Optional[category.Category] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    cheque_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cheque_number' }})
    closing_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closing_balance' }})
    date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_transfer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_transfer' }})
    labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memo' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    original_payee: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'original_payee' }})
    payee: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee' }})
    status: Optional[TransactionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    transaction_account: Optional[transactionaccount.TransactionAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction_account' }})
    type: Optional[TransactionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    upload_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upload_source' }})
    
