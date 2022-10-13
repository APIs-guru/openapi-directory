from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class V3DirectionWithDescription:
    direction_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction_id' }})
    direction_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction_name' }})
    route_direction_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'route_direction_description' }})
    route_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'route_id' }})
    route_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'route_type' }})
    
