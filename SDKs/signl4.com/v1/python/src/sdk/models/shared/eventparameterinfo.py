from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EventParameterInfo:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order' }})
    type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
