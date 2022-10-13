from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import nearbyattributes

class NearbyTypeEnum(str, Enum):
    NEARBY_FACILITY = "NearbyFacility"


@dataclass_json
@dataclass
class Nearby:
    attributes: nearbyattributes.NearbyAttributes = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: NearbyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
