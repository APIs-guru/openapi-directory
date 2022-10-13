from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import orderfulfillmentpickupdetailscurbsidepickupdetails
from . import orderfulfillmentrecipient


@dataclass_json
@dataclass
class OrderFulfillmentPickupDetails:
    accepted_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accepted_at' }})
    auto_complete_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auto_complete_duration' }})
    cancel_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancel_reason' }})
    canceled_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canceled_at' }})
    curbside_pickup_details: Optional[orderfulfillmentpickupdetailscurbsidepickupdetails.OrderFulfillmentPickupDetailsCurbsidePickupDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'curbside_pickup_details' }})
    expired_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expired_at' }})
    expires_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_at' }})
    is_curbside_pickup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_curbside_pickup' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    picked_up_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'picked_up_at' }})
    pickup_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickup_at' }})
    pickup_window_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickup_window_duration' }})
    placed_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placed_at' }})
    prep_time_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prep_time_duration' }})
    ready_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ready_at' }})
    recipient: Optional[orderfulfillmentrecipient.OrderFulfillmentRecipient] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipient' }})
    rejected_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rejected_at' }})
    schedule_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule_type' }})
    
