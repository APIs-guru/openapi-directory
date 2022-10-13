from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import appointmentsegment


@dataclass_json
@dataclass
class Availability:
    appointment_segments: Optional[List[appointmentsegment.AppointmentSegment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appointment_segments' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    start_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_at' }})
    
