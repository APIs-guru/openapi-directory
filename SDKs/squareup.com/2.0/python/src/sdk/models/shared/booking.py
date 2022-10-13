from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import appointmentsegment


@dataclass_json
@dataclass
class Booking:
    appointment_segments: Optional[List[appointmentsegment.AppointmentSegment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appointment_segments' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_id' }})
    customer_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_note' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    seller_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seller_note' }})
    start_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_at' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
