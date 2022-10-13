from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SubTransaction:
    amount: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category_id' }})
    category_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category_name' }})
    deleted: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memo' }})
    payee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee_id' }})
    payee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee_name' }})
    transaction_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction_id' }})
    transfer_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transfer_account_id' }})
    transfer_transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transfer_transaction_id' }})
    
