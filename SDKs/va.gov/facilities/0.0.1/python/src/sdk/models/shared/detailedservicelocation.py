from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DetailedServiceLocation:
    r"""DetailedServiceLocation
    Details for a location offering a service.
    """
    
    additional_hours_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additional_hours_info') }})
    appointment_phones: Optional[List[AppointmentPhoneNumber]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appointment_phones') }})
    email_contacts: Optional[List[DetailedServiceEmailContact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email_contacts') }})
    facility_service_hours: Optional[DetailedServiceHours] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('facility_service_hours') }})
    service_location_address: Optional[DetailedServiceAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_location_address') }})
    
