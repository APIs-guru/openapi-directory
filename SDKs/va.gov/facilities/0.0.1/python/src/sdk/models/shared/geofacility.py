from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GeoFacilityTypeEnum(str, Enum):
    FEATURE = "Feature"


@dataclass_json
@dataclass
class GeoFacility:
    r"""GeoFacility
    GeoJSON-complaint Feature object describing a VA Facility
    """
    
    geometry: Geometry = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('geometry') }})
    properties: Properties = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    type: GeoFacilityTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
