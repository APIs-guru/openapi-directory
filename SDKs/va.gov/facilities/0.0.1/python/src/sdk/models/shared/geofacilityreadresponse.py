from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GeoFacilityReadResponseTypeEnum(str, Enum):
    FEATURE = "Feature"


@dataclass_json
@dataclass
class GeoFacilityReadResponse:
    geometry: Geometry = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('geometry') }})
    properties: Properties = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    type: GeoFacilityReadResponseTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
