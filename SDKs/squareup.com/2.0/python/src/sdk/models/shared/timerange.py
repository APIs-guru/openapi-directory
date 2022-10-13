from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TimeRange:
    end_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_at' }})
    start_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_at' }})
    
