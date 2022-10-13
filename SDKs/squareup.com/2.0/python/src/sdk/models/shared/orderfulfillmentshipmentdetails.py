from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import orderfulfillmentrecipient


@dataclass_json
@dataclass
class OrderFulfillmentShipmentDetails:
    cancel_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancel_reason' }})
    canceled_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canceled_at' }})
    carrier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carrier' }})
    expected_shipped_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expected_shipped_at' }})
    failed_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failed_at' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failure_reason' }})
    in_progress_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'in_progress_at' }})
    packaged_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packaged_at' }})
    placed_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placed_at' }})
    recipient: Optional[orderfulfillmentrecipient.OrderFulfillmentRecipient] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipient' }})
    shipped_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipped_at' }})
    shipping_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipping_note' }})
    shipping_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipping_type' }})
    tracking_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tracking_number' }})
    tracking_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tracking_url' }})
    
