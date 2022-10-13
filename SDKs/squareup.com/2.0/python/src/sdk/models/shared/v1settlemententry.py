from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import v1money
from . import v1money


@dataclass_json
@dataclass
class V1SettlementEntry:
    amount_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount_money' }})
    fee_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fee_money' }})
    payment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payment_id' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
