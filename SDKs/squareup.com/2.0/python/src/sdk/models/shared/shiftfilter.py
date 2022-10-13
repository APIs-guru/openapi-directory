from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import timerange
from . import timerange
from . import shiftworkday


@dataclass_json
@dataclass
class ShiftFilter:
    employee_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employee_ids' }})
    end: Optional[timerange.TimeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    location_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_ids' }})
    start: Optional[timerange.TimeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    team_member_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_member_ids' }})
    workday: Optional[shiftworkday.ShiftWorkday] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workday' }})
    
