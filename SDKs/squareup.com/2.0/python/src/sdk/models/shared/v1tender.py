from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import v1money
from . import v1money
from . import v1money
from . import v1money


@dataclass_json
@dataclass
class V1Tender:
    card_brand: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card_brand' }})
    change_back_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'change_back_money' }})
    employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employee_id' }})
    entry_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entry_method' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_exchange: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_exchange' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pan_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pan_suffix' }})
    payment_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payment_note' }})
    receipt_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receipt_url' }})
    refunded_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refunded_money' }})
    settled_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settled_at' }})
    tendered_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tendered_at' }})
    tendered_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tendered_money' }})
    total_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_money' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
