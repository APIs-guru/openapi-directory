from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TimeIntervalObject:
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    duration: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    start: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    
