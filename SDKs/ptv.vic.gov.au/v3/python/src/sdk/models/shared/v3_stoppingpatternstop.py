from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import v3_stopticket


@dataclass_json
@dataclass
class V3StoppingPatternStop:
    route_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'route_type' }})
    stop_distance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stop_distance' }})
    stop_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stop_id' }})
    stop_landmark: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stop_landmark' }})
    stop_latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stop_latitude' }})
    stop_longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stop_longitude' }})
    stop_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stop_name' }})
    stop_sequence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stop_sequence' }})
    stop_suburb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stop_suburb' }})
    stop_ticket: Optional[v3_stopticket.V3StopTicket] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stop_ticket' }})
    
