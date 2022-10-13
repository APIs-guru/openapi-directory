from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import durationfieldtype


@dataclass_json
@dataclass
class DurationField:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    precise: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'precise' }})
    supported: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supported' }})
    type: Optional[durationfieldtype.DurationFieldType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    unit_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unitMillis' }})
    
