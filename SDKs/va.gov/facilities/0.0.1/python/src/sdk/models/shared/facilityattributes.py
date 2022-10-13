from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import addresses
from . import detailedservice
from . import hours
from . import operatingstatus
from . import phone
from . import satisfaction
from . import services
from . import waittimes

class FacilityAttributesActiveStatusEnum(str, Enum):
    A = "A"
    T = "T"

class FacilityAttributesFacilityTypeEnum(str, Enum):
    VA_BENEFITS_FACILITY = "va_benefits_facility"
    VA_CEMETERY = "va_cemetery"
    VA_HEALTH_FACILITY = "va_health_facility"
    VET_CENTER = "vet_center"


@dataclass_json
@dataclass
class FacilityAttributes:
    active_status: Optional[FacilityAttributesActiveStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active_status' }})
    address: Optional[addresses.Addresses] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    classification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classification' }})
    detailed_services: Optional[List[detailedservice.DetailedService]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detailed_services' }})
    facility_type: FacilityAttributesFacilityTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'facility_type' }})
    hours: Optional[hours.Hours] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hours' }})
    lat: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lat' }})
    long: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'long' }})
    mobile: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobile' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operating_status: operatingstatus.OperatingStatus = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operating_status' }})
    operational_hours_special_instructions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operational_hours_special_instructions' }})
    phone: Optional[phone.Phone] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    satisfaction: Optional[satisfaction.Satisfaction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'satisfaction' }})
    services: Optional[services.Services] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_zone' }})
    visn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visn' }})
    wait_times: Optional[waittimes.WaitTimes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wait_times' }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'website' }})
    
