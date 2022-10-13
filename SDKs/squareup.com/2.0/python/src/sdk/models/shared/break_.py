from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Break:
    break_type_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'break_type_id' }})
    end_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_at' }})
    expected_duration: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expected_duration' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_paid: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_paid' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    start_at: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_at' }})
    
