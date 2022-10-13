from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import daterange


@dataclass_json
@dataclass
class ShiftWorkday:
    date_range: Optional[daterange.DateRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_range' }})
    default_timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default_timezone' }})
    match_shifts_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'match_shifts_by' }})
    
