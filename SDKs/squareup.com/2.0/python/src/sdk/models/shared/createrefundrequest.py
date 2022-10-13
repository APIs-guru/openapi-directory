from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import money


@dataclass_json
@dataclass
class CreateRefundRequest:
    amount_money: money.Money = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount_money' }})
    idempotency_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    tender_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tender_id' }})
    
