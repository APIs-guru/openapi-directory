from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import money


@dataclass_json
@dataclass
class TerminalRefund:
    amount_money: money.Money = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount_money' }})
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'app_id' }})
    cancel_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancel_reason' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    deadline_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deadline_duration' }})
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_id' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order_id' }})
    payment_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payment_id' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    refund_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refund_id' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    
