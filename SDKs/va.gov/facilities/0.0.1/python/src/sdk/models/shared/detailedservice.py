from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import appointmentphonenumber
from . import detailedservicelocation


@dataclass_json
@dataclass
class DetailedService:
    appointment_leadin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appointment_leadin' }})
    appointment_phones: Optional[List[appointmentphonenumber.AppointmentPhoneNumber]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appointment_phones' }})
    description_facility: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description_facility' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    online_scheduling_available: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'online_scheduling_available' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    referral_required: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referral_required' }})
    service_locations: Optional[List[detailedservicelocation.DetailedServiceLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_locations' }})
    walk_ins_accepted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'walk_ins_accepted' }})
    
