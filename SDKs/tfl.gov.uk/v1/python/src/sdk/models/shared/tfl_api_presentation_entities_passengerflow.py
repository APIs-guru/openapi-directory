from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesPassengerFlow:
    time_slice: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSlice' }})
    value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
