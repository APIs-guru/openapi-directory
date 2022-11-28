from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SubTransaction:
    amount: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    deleted: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    transaction_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction_id') }})
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category_id') }})
    category_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category_name') }})
    memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memo') }})
    payee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_id') }})
    payee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_name') }})
    transfer_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transfer_account_id') }})
    transfer_transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transfer_transaction_id') }})
    
