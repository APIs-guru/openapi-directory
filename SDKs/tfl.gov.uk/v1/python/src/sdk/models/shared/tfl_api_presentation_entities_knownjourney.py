from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesKnownJourney:
    hour: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hour' }})
    interval_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intervalId' }})
    minute: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minute' }})
    
