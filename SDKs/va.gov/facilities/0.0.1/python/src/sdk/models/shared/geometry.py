from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GeometryTypeEnum(str, Enum):
    POINT = "Point"


@dataclass_json
@dataclass
class Geometry:
    coordinates: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coordinates' }})
    type: GeometryTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
