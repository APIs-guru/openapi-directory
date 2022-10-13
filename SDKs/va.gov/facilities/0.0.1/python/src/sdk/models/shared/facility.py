from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import facilityattributes

class FacilityTypeEnum(str, Enum):
    VA_FACILITIES = "va_facilities"


@dataclass_json
@dataclass
class Facility:
    attributes: facilityattributes.FacilityAttributes = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: FacilityTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
