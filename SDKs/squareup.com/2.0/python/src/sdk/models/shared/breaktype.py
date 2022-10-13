from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BreakType:
    break_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'break_name' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    expected_duration: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expected_duration' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_paid: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_paid' }})
    location_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
