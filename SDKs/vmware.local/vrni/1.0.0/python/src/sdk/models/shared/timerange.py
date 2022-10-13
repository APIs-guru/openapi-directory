from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TimeRange:
    end_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_time' }})
    start_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_time' }})
    
