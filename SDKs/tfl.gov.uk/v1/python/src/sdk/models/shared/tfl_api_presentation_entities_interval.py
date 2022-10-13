from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesInterval:
    stop_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopId' }})
    time_to_arrival: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeToArrival' }})
    
