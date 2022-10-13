from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import geometry
from . import properties

class GeoFacilityReadResponseTypeEnum(str, Enum):
    FEATURE = "Feature"


@dataclass_json
@dataclass
class GeoFacilityReadResponse:
    geometry: geometry.Geometry = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geometry' }})
    properties: properties.Properties = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    type: GeoFacilityReadResponseTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
