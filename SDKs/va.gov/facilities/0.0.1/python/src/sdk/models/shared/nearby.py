from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class NearbyTypeEnum(str, Enum):
    NEARBY_FACILITY = "NearbyFacility"


@dataclass_json
@dataclass
class Nearby:
    r"""Nearby
    JSON API-compliant object describing a nearby VA facility
    """
    
    attributes: NearbyAttributes = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: NearbyTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
