from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BoundingBoxNortheast:
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    

@dataclass_json
@dataclass
class BoundingBoxSouthwest:
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    

@dataclass_json
@dataclass
class BoundingBox:
    northeast: Optional[BoundingBoxNortheast] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'northeast' }})
    southwest: Optional[BoundingBoxSouthwest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'southwest' }})
    
