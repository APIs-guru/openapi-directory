from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import money
from . import devicecheckoutoptions


@dataclass_json
@dataclass
class TerminalCheckout:
    amount_money: money.Money = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount_money' }})
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'app_id' }})
    cancel_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancel_reason' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    deadline_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deadline_duration' }})
    device_options: devicecheckoutoptions.DeviceCheckoutOptions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_options' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    payment_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payment_ids' }})
    payment_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payment_type' }})
    reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference_id' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    
