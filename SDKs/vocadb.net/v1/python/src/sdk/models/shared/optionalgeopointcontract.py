from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OptionalGeoPointContract:
    formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formatted' }})
    has_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasValue' }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    
