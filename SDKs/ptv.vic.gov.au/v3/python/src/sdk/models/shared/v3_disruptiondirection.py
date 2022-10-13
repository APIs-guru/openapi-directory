from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class V3DisruptionDirection:
    direction_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction_id' }})
    direction_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction_name' }})
    route_direction_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'route_direction_id' }})
    service_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_time' }})
    
