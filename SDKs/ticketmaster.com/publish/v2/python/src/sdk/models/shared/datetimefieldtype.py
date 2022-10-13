from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import durationfieldtype
from . import durationfieldtype


@dataclass_json
@dataclass
class DateTimeFieldType:
    duration_type: Optional[durationfieldtype.DurationFieldType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    range_duration_type: Optional[durationfieldtype.DurationFieldType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rangeDurationType' }})
    
