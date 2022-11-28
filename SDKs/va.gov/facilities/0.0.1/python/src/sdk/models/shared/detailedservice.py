from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DetailedService:
    r"""DetailedService
    Detailed information of a facility service.
    """
    
    appointment_leadin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appointment_leadin') }})
    appointment_phones: Optional[List[AppointmentPhoneNumber]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appointment_phones') }})
    description_facility: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description_facility') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    online_scheduling_available: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('online_scheduling_available') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    referral_required: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referral_required') }})
    service_locations: Optional[List[DetailedServiceLocation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_locations') }})
    walk_ins_accepted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('walk_ins_accepted') }})
    
