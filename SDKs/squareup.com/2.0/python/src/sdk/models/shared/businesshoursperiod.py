from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BusinessHoursPeriod:
    day_of_week: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'day_of_week' }})
    end_local_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_local_time' }})
    start_local_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_local_time' }})
    
