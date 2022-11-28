from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PropertiesActiveStatusEnum(str, Enum):
    A = "A"
    T = "T"

class PropertiesFacilityTypeEnum(str, Enum):
    VA_BENEFITS_FACILITY = "va_benefits_facility"
    VA_CEMETERY = "va_cemetery"
    VA_HEALTH_FACILITY = "va_health_facility"
    VET_CENTER = "vet_center"


@dataclass_json
@dataclass
class Properties:
    facility_type: PropertiesFacilityTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('facility_type') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    operating_status: OperatingStatus = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operating_status') }})
    active_status: Optional[PropertiesActiveStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active_status') }})
    address: Optional[Addresses] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    classification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification') }})
    detailed_services: Optional[List[DetailedService]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detailed_services') }})
    hours: Optional[Hours] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hours') }})
    mobile: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobile') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operational_hours_special_instructions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operational_hours_special_instructions') }})
    phone: Optional[Phone] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    satisfaction: Optional[Satisfaction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('satisfaction') }})
    services: Optional[Services] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_zone') }})
    visn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visn') }})
    wait_times: Optional[WaitTimes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wait_times') }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('website') }})
    
