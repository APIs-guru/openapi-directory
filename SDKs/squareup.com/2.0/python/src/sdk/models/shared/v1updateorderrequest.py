from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class V1UpdateOrderRequest:
    action: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    canceled_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canceled_note' }})
    completed_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completed_note' }})
    refunded_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refunded_note' }})
    shipped_tracking_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipped_tracking_number' }})
    
