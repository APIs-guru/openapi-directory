from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ScheduledSubTransaction:
    amount: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category_id' }})
    deleted: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memo' }})
    payee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee_id' }})
    scheduled_transaction_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduled_transaction_id' }})
    transfer_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transfer_account_id' }})
    
