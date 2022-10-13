from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import v3_disruptiondirection


@dataclass_json
@dataclass
class V3DisruptionRoute:
    direction: Optional[v3_disruptiondirection.V3DisruptionDirection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    route_gtfs_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'route_gtfs_id' }})
    route_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'route_id' }})
    route_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'route_name' }})
    route_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'route_number' }})
    route_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'route_type' }})
    
